import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/login/Loginform';
import Title from './components/Common/Title';

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleUsernameChange = (change) => setUsername(change)
  const handlePasswordChange = (change) => setPassword(change);

  const handleLogin = () => {

  }

  const displayBlogs = (blogs) => {
    return (
      blogs.map(blog =>
        <Blog blog={blog} id={blog.id}/>
      )
    );
  };

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  return (
    <div>
      <Login handleLogin={handleLogin} password={password} setPassword={handlePasswordChange}
             username={username} setUsername={handleUsernameChange} />
      <Title text='blogs'/>
      {displayBlogs(blogs)}
    </div>
  )
}

export default App