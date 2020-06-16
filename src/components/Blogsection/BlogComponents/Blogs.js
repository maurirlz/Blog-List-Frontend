import React from 'react';
import Blog from './Blog';

const Blogs = ({ blogs }) => {
  return (
    <>
      {
        blogs.map((blog) =>
      <Blog blog={blog} key={blog.id} />)}
    </>
  );
};

export default Blogs;