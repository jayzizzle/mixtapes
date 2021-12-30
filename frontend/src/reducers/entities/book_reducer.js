import { RECEIVE_BOOK } from '../../actions/book_actions';

const BookReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BOOK:
      newState[action.book.gBookId] = action.book;
      return newState;
    default:
      return oldState;
  }
};

export default BookReducer;
