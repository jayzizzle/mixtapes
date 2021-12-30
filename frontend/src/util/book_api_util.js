import axios from 'axios';

export const patchBookshelf = (book, userId) => {
  return axios.patch(`api/books/${userId}/bookshelf/addbook`, book);
};
