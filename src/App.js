import React, { useEffect, useState } from "react";
import Blogs from "./components/Blogsection/BlogComponents/Blogs";
import blogService from "./services/blogs";
import loginService from "./services/login";
import BlogForm from "./components/Blogsection/Form/BlogForm";
import LoginSection from "./components/login/LoginSection";
import Greeting from "./components/Blogsection/Greeting";
import Notification from "./components/Common/Notification";
import Togglable from "/home/maaush/git/blog-list-frontend/src/components/Common/Togglable";

const App = () => {
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedBlogUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleLogout = () => {
    window.localStorage.removeItem("LoggedBlogUser");
    setUser(null);
    blogService.setToken("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("LoggedBlogUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUsername("");
      setPassword("");
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

  const displayLoginForm = () => {
    return (
      <div class="loginform">
        <Notification class="notification" message={errorMessage} />
        <LoginSection
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    );
  };

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
        <Togglable buttonLabel="Create a New Blog">
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
          />
        </div>
      </div>
    );
  };

  return <>{user === null ? displayLoginForm() : displayBlogsSection(blogs)}</>;
};

export default App;
