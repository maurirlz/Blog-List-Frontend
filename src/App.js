import React, { useEffect, useState } from 'react';
import Blogs from './components/Blogsection/BlogComponents/Blogs';
import blogService from './services/blogs';
import loginService from './services/login';
import BlogForm from './components/Blogsection/Form/BlogForm';
import LoginForm from './components/login/Loginform';
import Greeting from './components/Blogsection/Greeting';
import Notification from './components/Common/Notification';
import Togglable from './components/Common/Togglable';

const App = () => {
  // state declaration

  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState(null);

  const blogFormRef = React.createRef();

  // effects declaration

  useEffect(() => {
    // GET all blogs through axios.

    blogService.getAll().then((returnedBlogs) => {
      setBlogs(returnedBlogs);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('LoggedBlogUser');

    if (loggedUserJSON) {
      const userData = JSON.parse(loggedUserJSON);
      setUser(userData);
      blogService.setToken(userData.token);
    }
  }, []);

  // logout

  const handleLogout = () => {
    window.localStorage.removeItem('LoggedBlogUser');
    setUser(null);
    blogService.setToken('');
  };

  // login

  const handleLogin = async (userCredentials) => {
    try {
      const userLogin = await loginService.login(userCredentials);

      window.localStorage.setItem('LoggedBlogUser', JSON.stringify(userLogin));
      blogService.setToken(userLogin.token);

      setUser(userLogin);
    } catch (e) {
      if (e.message.includes('401')) {
        setErrorMessage('Invalid username or password.');
      }

      setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
    }
  };

  // send post request to the axios function then to the server.

  const createBlog = async (newBlog) => {
    try {
      const data = await blogService.createBlog(newBlog);

      setBlogs(blogs.concat(data));
      setNotificationMessage('Blog added!');

      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);
    } catch (e) {
      setTimeout(() => {
        setErrorMessage(e.message);
      }, 4000);

      setErrorMessage(null);
    }
  };

  // sends put request to the axios function to update the likes qty of a post.

  const handleBlogLike = async (id) => {
    try {
      const oldBlog = blogs.find((blog) => blog.id === id);

      const newBlog = {
        ...oldBlog,
        likes: (oldBlog.likes += 1),
      };

      const response = await blogService.updateBlog(newBlog);
      response.user = oldBlog.user;

      setBlogs(blogs.map((blog) => (blog.id !== oldBlog.id ? blog : response)));
    } catch (e) {
      setTimeout(() => {
        setErrorMessage(e.message);
      }, 4000);
    }
  };

  // sends delete request to the axios function to remove the post in its entirety.

  const handleBlogDelete = async (id) => {
    try {
      await blogService.deleteBlog(id);

      setBlogs(blogs.filter((blog) => blog.id !== id));
      setNotificationMessage('Blog successfully deleted.');
    } catch (e) {
      setErrorMessage('Only the owner of this blog can delete it.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  // form login

  const displayLoginForm = () => {
    return (
      <div className="loginform">
        <Notification id="loginError" class="notification" message={errorMessage} />
        <LoginForm handleLogin={handleLogin} />
      </div>
    );
  };

  // form blogs creation

  const displayBlogsSection = (blogsToDisplay) => {
    return (
      <div>
        <div>
          <Greeting
            username={user.name}
            textTitle="Blog section"
            handleLogout={handleLogout}
          />
          <Notification className="notification" message={notificationMessage} />
          <Notification className="error" message={errorMessage} />
        </div>
        <Togglable
          positiveButtonLabel="Create a New Blog"
          negativeButtonLabel="Cancel"
          ref={blogFormRef}
        >
          <div>
            <br />
            <BlogForm handleBlogCreation={createBlog} />
          </div>
        </Togglable>
        <div>
          <br />
          <Blogs
            username={user.name}
            blogs={blogsToDisplay}
            textTitle="Blog Section"
            handleLogout={handleLogout}
            likeHandler={handleBlogLike}
            deleteHandler={handleBlogDelete}
          />
        </div>
      </div>
    );
  };

  return <>{user === null ? displayLoginForm() : displayBlogsSection(blogs)}</>;
};

export default App;
