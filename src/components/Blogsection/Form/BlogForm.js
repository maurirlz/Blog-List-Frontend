import React, { useState } from "react";
import FormInput from "../../Common/FormInput";
import FormButton from "../../Common/FormButton";

const BlogForm = ({ handleBlogCreation }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addBlog = (event) => {
    event.preventDefault();

    handleBlogCreation({
      title: title,
      author: author,
      url: url,
    });

    setAuthor("");
    setTitle("");
    setUrl("");
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

export default BlogForm;
