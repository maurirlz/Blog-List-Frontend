import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs, likeHandler }) => {
  return (
    <>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} likeHandler={likeHandler} />
      ))}
    </>
  );
};

export default Blogs;
