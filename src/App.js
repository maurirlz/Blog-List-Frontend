import React, { useEffect, useState } from "react";
import Blogs from "./components/Blogsection/BlogComponents/Blogs";
import blogService from "./services/blogs";
import loginService from "./services/login";
import BlogForm from "./components/Blogsection/Form/BlogForm";
import LoginForm from "./components/login/Loginform";
import Greeting from "./components/Blogsection/Greeting";
import Notification from "./components/Common/Notification";
import Togglable from "/home/maaush/git/blog-list-frontend/src/components/Common/Togglable";

const App = () => {
  // state declaration

  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState(null);

  // effects declaration

  useEffect(() => {
    // GET all blogs through axios.

    blogService.getAll().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedBlogUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  // logout

  const handleLogout = () => {
    window.localStorage.removeItem("LoggedBlogUser");
    setUser(null);
    blogService.setToken("");
  };

  // login

  const handleLogin = async (userCredentials) => {
    try {
      const user = await loginService.login(userCredentials);

      window.localStorage.setItem("LoggedBlogUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
    } catch (e) {
      if (e.message.includes("401")) {
        setErrorMessage("Invalid username or password.");
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
      setNotificationMessage("Blog added!!!");
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
      console.log(blogs);
    } catch (e) {
      setTimeout(() => {
        setErrorMessage(e.message);
      }, 4000);
    }
  };

  // form login

  const displayLoginForm = () => {
    return (
      <div className="loginform">
        <Notification class="notification" message={errorMessage} />
        <LoginForm handleLogin={handleLogin} />
      </div>
    );
  };

  // form blogs creation

  const displayBlogsSection = (blogs) => {
    return (
      <div>
        <div>
          <Greeting
            username={user.name}
            textTitle="Blog section"
            handleLogout={handleLogout}
          />
          <Notification class="notification" message={notificationMessage} />
        </div>
        <Togglable
          positiveButtonLabel="Create a New Blog"
          negativeButtonLabel="Cancel"
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
            blogs={blogs}
            textTitle="Blog Section"
            handleLogout={handleLogout}
            likeHandler={handleBlogLike}
          />
        </div>
      </div>
    );
  };

  return <>{user === null ? displayLoginForm() : displayBlogsSection(blogs)}</>;
};

export default App;
