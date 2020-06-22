import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);

  console.log(response.data);
  return response.data;
};

const createBlog = async (blog) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.post(baseUrl, blog, config);

  return response.data;
};

const updateBlog = async (blog) => {
  const urlId = `${baseUrl}/${blog.id}`;
  const response = await axios.put(urlId, blog);

  return response.data;
};

const deleteBlog = async (id) => {
  const urlId = `${baseUrl}/${id}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.delete(urlId, config);

  return response.data;
};

export default { getAll, setToken, createBlog, updateBlog, deleteBlog };
