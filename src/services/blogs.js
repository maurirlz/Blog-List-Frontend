import axios from 'axios'
const baseUrl = '/api/blogs'

<<<<<<< HEAD
let token;

const handleToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data;
};
=======
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
>>>>>>> 5bec4155a5768fe5a385e486cec11b143139c2bb

export default { getAll }