import axios from 'axios'
const baseUrl = '/api/blogs'

let token;

const handleToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data;
};

export default { getAll }