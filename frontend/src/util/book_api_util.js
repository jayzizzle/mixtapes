import axios from 'axios';

export const getBooks = (userId) => {
  return axios.get(`api/books/user/${userId}`);
};
