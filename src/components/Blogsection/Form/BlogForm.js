import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Common/FormInput';
import FormButton from '../../Common/FormButton';

const BlogForm = ({ handleBlogCreation }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const addBlog = (event) => {
    event.preventDefault();

    handleBlogCreation({
      title,
      author,
      url,
    });

    setAuthor('');
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={addBlog}>
      <FormInput
        state={title}
        setState={setTitle}
        name="title"
        type="Text"
        text="Title"
      />
      <FormInput
        state={author}
        setState={setAuthor}
        name="author"
        type="Text"
        text="Author"
      />
      <FormInput
        state={url}
        setState={setUrl}
        name="url"
        type="Text"
        text="URL"
      />
      <FormButton type="submit" text="Create a Blog" />
    </form>
  );
};

BlogForm.propTypes = {
  handleBlogCreation: PropTypes.func.isRequired,
};

export default BlogForm;
