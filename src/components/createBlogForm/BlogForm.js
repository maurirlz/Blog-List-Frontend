import React from 'react';
import FormInput from '../Common/FormInput';
import FormButton from '../Common/FormButton';

const BlogForm = ({ title, setTitle, author, setAuthor, url, setUrl, handleBlogCreation }) => {

  return (
    <form onSubmit={handleBlogCreation}>
    <FormInput state={title} setState={setTitle} name="title" type="Text" text="Title" />
    <FormInput state={author} setState={setAuthor} name="author" type="Text" text="Author" />
    <FormInput state={url} setState={setUrl} name="url" type="Text" text="URL" />
    <FormButton type="submit" text="Create a Blog"/>
    </form>
  )
}

export default BlogForm;