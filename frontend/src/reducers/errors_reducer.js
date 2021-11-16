import { combineReducers } from 'redux';
import SessionErrorsReducer from './errors/session_errors_reducer';

export default combineReducers({
  sessionErrors: SessionErrorsReducer,
});
