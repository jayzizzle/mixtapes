import { combineReducers } from 'redux';
import UserReducer from './entities/user_reducer';

const EntitiesReducer = combineReducers({
  fetchedUser: UserReducer,
});

export default EntitiesReducer;
