import * as APIUtil from '../util/book_api_util';

export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';

const receiveBookshelf = (books) => ({
  type: RECEIVE_BOOKSHELF,
  books,
});

export const patchBookshelf = (book, userId) => (dispatch) =>
  APIUtil.patchBookshelf(book, userId).then((books) =>
    dispatch(receiveBookshelf(books))
  );
