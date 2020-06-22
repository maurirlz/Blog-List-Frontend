import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs, likeHandler, deleteHandler }) => {
  blogs.sort((blog, otherBlog) => {
    if (blog.likes > otherBlog.likes) {
      return -1;
    }

    if (blog.likes < otherBlog.likes) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          likeHandler={likeHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </>
  );
};

export default Blogs;
