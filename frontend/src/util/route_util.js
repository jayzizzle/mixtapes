import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

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

const mSTP = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = connect(mSTP, null)(RequireAuth);

// export const ProtectedRoute = connect(mapStateToProps)(Protected);
