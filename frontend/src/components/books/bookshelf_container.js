import { connect } from 'react-redux';
import { getBookshelf } from '../../actions/book_actions';
import { Bookshelf } from './bookshelf';

const mSTP = (state) => ({
  userId: state.session.user.id,
  bookshelf: state.entities.bookshelf,
});

const mDTP = (dispatch) => ({
  getBookshelf: (userId) => dispatch(getBookshelf(userId)),
});

export default connect(mSTP, mDTP)(Bookshelf);
