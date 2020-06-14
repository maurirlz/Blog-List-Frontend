import React, {useEffect, useState} from 'react';
import Blog from './components/Blog';
import Title from './components/Common/Title';
import Login from './components/login/Loginform';
import blogService from './services/blogs';
import loginService from './services/login';

const App = () => {

  useEffect( () => {
    const data = blogService.getAll().then(blogs => setBlogs(blogs));
  }, [])

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('LoggedBlogUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.handleToken(user.token)
    }
  }, []);


  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleUsernameChange = (change) => setUsername(change)
  const handlePasswordChange = (change) => setPassword(change);

  const handleLogin = async (event) => {

    event.preventDefault();

    try {

      const user = await loginService.login({
        username, password
      });

      window.localStorage.setItem('LoggedBlogUser',
        JSON.stringify(user))

      setUsername('')
      setPassword('')
      setUser(user);
    } catch (e) {
      console.error(e.message)
    }
  }

  const displayLoginForm = () => {
    return (
      <>
        <Title text="Log in"/>
        <br/>
        <Login handleLogin={handleLogin} password={password} setPassword={handlePasswordChange}
               username={username} setUsername={handleUsernameChange} />
      </>
    )
  }

  const displayBlogs = (blogs) => {
    return (
      <>
        <Title text="Blogs"/>
        <p>{user.name} logged in.</p>
        {
          blogs.map(blog =>
            <Blog blog={blog} id={blog.id}/>
          )}
      </>
    );
  };

  return (
    <div>

      {user === null ?

        displayLoginForm() :
        displayBlogs(blogs)
      }
    </div>
  )
}

export default App;