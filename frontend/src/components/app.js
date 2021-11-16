import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

import RegisterContainer from './session/register_container';

const App = () => (
  <>
    <div>
      <Routes>
        <Route exact path='/register' element={<RegisterContainer />} />
      </Routes>
    </div>
  </>
);

export default App;
