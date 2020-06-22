import React, { useState } from "react";
import Button from "../../Common/Button";

const Blog = ({ blog, likeHandler }) => {
  const [showDetails, setShowDetails] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const addLike = (id) => {
    likeHandler(id);
  };

  const showBlog = () => {
    if (!showDetails) {
      return (
        <div>
          {blog.title} --- {blog.author}
          <Button
            clickHandler={() => setShowDetails(!showDetails)}
            text="view blog"
          />
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Blog Title: {blog.title}
            <br />
            Blog Author: {blog.author}
            <br />
            Total Likes: {blog.likes + "  "}
            <Button text="Like" clickHandler={() => addLike(blog.id)} />
            <br />
            URL: {blog.url}
            <br />
            User: {blog.user.username}
          </p>
          <Button
            clickHandler={() => setShowDetails(!showDetails)}
            text="hide blog"
          />
        </div>
      );
    }
  };

  return <div style={blogStyle}>{showBlog()}</div>;
};
export default Blog;
