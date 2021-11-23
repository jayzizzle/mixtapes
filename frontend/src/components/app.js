import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoute, AbsenceRoute } from '../util/route_util';

import DashboardContainer from './dashboard/dashboard_container';
import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Splash } from './splash/splash';
import { AddBook } from './books/add_book';

const App = () => (
  <>
    <div>
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
        <Route exact path='/' element={<Splash />} />
      </Routes>
    </div>
  </>
);

export default App;
