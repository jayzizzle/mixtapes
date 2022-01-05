import axios from 'axios';

export const getBookshelf = (userId) => {
  return axios.get(`api/books/${userId}/bookshelf`);
};

export const patchBookshelf = (book, userId) => {
  return axios.patch(`api/books/${userId}/bookshelf/addbook`, book);
};
