import { RECEIVE_BOOKSHELF } from '../../actions/book_actions';

const BookReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      let bookshelf = {};
      action.books.data.forEach((book) => {
        bookshelf[book.gBookId] = book;
      });
      return bookshelf;
    default:
      return oldState;
  }
};

export default BookReducer;
