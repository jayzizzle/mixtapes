import axios from 'axios';

export const patchBooks = (book) => {
  return axios.get(`api/books/${userId}/bookshelf/addbook`, book);
};
