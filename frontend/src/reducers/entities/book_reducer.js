import { RECEIVE_BOOKSHELF } from '../../actions/book_actions';

const BookReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  // let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      return action.books.data;
    default:
      return oldState;
  }
};

export default BookReducer;
