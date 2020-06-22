import React from "react";
import PropTypes from "prop-types";
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
Blogs.propTypes = {
  likeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  blogs: PropTypes.node.isRequired,
};

export default Blogs;
