import { connect } from 'react-redux';
import {
  signup,
  login,
  clearSessionErrors,
} from '../../actions/session_actions';
import Register from './register';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
