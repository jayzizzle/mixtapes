import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

import { Register } from './session/register';

const App = () => (
  <>
    <div>
      <Routes>
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  </>
);

export default App;
