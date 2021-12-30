import { combineReducers } from 'redux';
import UserReducer from './entities/user_reducer';
import BookReducer from './entities/book_reducer';

const EntitiesReducer = combineReducers({
  fetchedUser: UserReducer,
  bookshelf: BookReducer,
});

export default EntitiesReducer;
