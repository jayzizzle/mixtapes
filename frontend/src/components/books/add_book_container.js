import { connect } from 'react-redux';
import { patchBookshelf } from '../../actions/book_actions';
import { AddBook } from './add_book';

const mSTP = (state) => ({
  userId: state.session.user.id,
  bookshelf: state.entities.bookshelf,
});

const mDTP = (dispatch) => ({
  patchBookshelf: (book, userId) => dispatch(patchBookshelf(book, userId)),
});

export default connect(mSTP, mDTP)(AddBook);
