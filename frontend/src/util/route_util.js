import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to='/login' replace />;
};

const RequireAbsence = ({ children, loggedIn }) => {
  return !loggedIn ? children : <Navigate to='/dashboard' replace />;
};

const mSTP = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = connect(mSTP, null)(RequireAuth);
export const AbsenceRoute = connect(mSTP, null)(RequireAbsence);
