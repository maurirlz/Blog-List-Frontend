import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Common/Button';

const Blog = ({ blog, likeHandler, deleteHandler }) => {
  const [showDetails, setShowDetails] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  const addLike = (id) => {
    likeHandler(id);
  };

  const deleteBlog = (id) => {
    deleteHandler(id);
  };

  const showBlog = () => {
    if (!showDetails) {
      return (
        <div className="renderedBlog">
          {blog.title} --- {blog.author}
          <Button
            clickHandler={() => setShowDetails(!showDetails)}
            text="view blog"
          />
        </div>
      );
    }
    return (
      <div>
        <Button clickHandler={() => deleteBlog(blog.id)} text="Delete blog" />
        <p>
          Blog Title: {blog.title}
          <br />
          Blog Author: {blog.author}
          <br />
          Total Likes: {`${blog.likes}  `}
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
  };

  return (
    <div className="blog" style={blogStyle}>
      {showBlog()}
    </div>
  );
};

Blog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blog: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Blog;
