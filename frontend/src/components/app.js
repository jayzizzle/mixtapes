import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

import RegisterContainer from './session/register_container';
import LoginContainer from './session/login_container';
import { Splash } from './splash/splash';

const App = () => (
  <>
    <div>
      <Routes>
        <Route exact path='/register' element={<RegisterContainer />} />
        <Route exact path='/login' element={<LoginContainer />} />
        <Route exact path='/' element={<Splash />} />
      </Routes>
    </div>
  </>
);

export default App;
