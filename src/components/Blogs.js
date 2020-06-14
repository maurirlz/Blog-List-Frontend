import React from 'react';
import Blog from './Blog';
import Title from './Common/Title';
import Button from './Common/Button';

const Blogs = ({ blogs, textTitle, username, handleLogout }) => {
  return (
    <>
      <Title text={textTitle}/>
      <p>{username} logged in.</p> <Button text="logout" clickHandler={handleLogout}/>
      {
        blogs.map((blog) =>
      <Blog blog={blog} key={blog.id} />)}
    </>
  );
};

export default Blogs;