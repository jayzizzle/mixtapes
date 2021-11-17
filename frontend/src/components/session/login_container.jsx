import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
