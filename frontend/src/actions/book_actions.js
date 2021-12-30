import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book,
});

export const patchBookshelf = (book, userId) => (dispatch) =>
  APIUtil.patchBookshelf(book, userId).then((book) =>
    dispatch(receiveBook(book))
  );
