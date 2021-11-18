import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate, useNavigate } from 'react-router-dom';

const RequireAuth = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to='/login' replace />;
};

// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//   <Route
//     path={path}
//     exact={exact}
//     render={(props) =>
//       !loggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Navigate replace to='/dashboard' />
//       )
//     }
//   />
// );

// const Protected = ({ component: Component, loggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       loggedIn ? <Component {...props} /> : <Navigate replace to='/login' />
//     }
//   />
// );

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = connect(mapStateToProps)(RequireAuth);

// export const ProtectedRoute = connect(mapStateToProps)(Protected);
