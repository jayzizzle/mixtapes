import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoute, AbsenceRoute } from '../util/route_util';

import DashboardContainer from './dashboard/dashboard_container';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Splash } from './splash/splash';
import { AddBook } from './books/add_book';
import HeaderContainer from './header/header_container';

const App = () => (
  <>
    <HeaderContainer />
    <Routes>
      <Route
        exact
        path='/addbook'
        element={
          <AuthRoute>
            <AddBook />
          </AuthRoute>
        }
      />
      <Route
        exact
        path='/dashboard'
        element={
          <AuthRoute>
            <DashboardContainer />
          </AuthRoute>
        }
      />
      <Route
        exact
        path='/register'
        element={
          <AbsenceRoute>
            <RegisterContainer />
          </AbsenceRoute>
        }
      />
      <Route
        exact
        path='/login'
        element={
          <AbsenceRoute>
            <LoginContainer />
          </AbsenceRoute>
        }
      />
      <Route
        exact
        path='/'
        element={
          <AbsenceRoute>
            <Splash />
          </AbsenceRoute>
        }
      />
    </Routes>
  </>
);

export default App;
