import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
<<<<<<< HEAD
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
=======

const App = () => {
  const [blogs, setBlogs] = useState([])
>>>>>>> 5bec4155a5768fe5a385e486cec11b143139c2bb

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
<<<<<<< HEAD
    )
=======
    )  
>>>>>>> 5bec4155a5768fe5a385e486cec11b143139c2bb
  }, [])

  return (
    <div>
<<<<<<< HEAD
      <Login handleLogin={handleLogin} password={password} setPassword={handlePasswordChange}
             username={username} setUsername={handleUsernameChange} />
      <Title text='blogs'/>
      {displayBlogs(blogs)}
=======
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
>>>>>>> 5bec4155a5768fe5a385e486cec11b143139c2bb
    </div>
  )
}

export default App