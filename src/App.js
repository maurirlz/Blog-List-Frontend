import React, { useEffect, useState } from "react";
import Blogs from "./components/Blogsection/BlogComponents/Blogs";
import blogService from "./services/blogs";
import loginService from "./services/login";
import BlogForm from "./components/Blogsection/Form/BlogForm";
import LoginSection from "./components/login/LoginSection";
import Greeting from "./components/Blogsection/Greeting";

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
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(null);

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
      console.error(e.message);
    }
  };

  const createBlog = async (event) => {
    event.preventDefault();
    try {
      const newBlog = {
        title,
        author,
        url,
      };

      const data = await blogService.createBlog(newBlog);
      setTitle("");
      setUrl("");
      setAuthor("");
      setBlogs(blogs.concat(data));
    } catch (e) {
      console.error(e.message);
    }
  };

  const displayLoginForm = () => {
    return (
      <div class="loginform">
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
        </div>
        <div>
          <br />
          <BlogForm
            author={author}
            setAuthor={setAuthor}
            title={title}
            setTitle={setTitle}
            url={url}
            setUrl={setUrl}
            handleBlogCreation={createBlog}
          />
        </div>
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
