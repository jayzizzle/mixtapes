import React from 'react';
import { Routes } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <div>
      <h1>Mixtapes</h1>
      <Routes></Routes>
    </div>
  </>
);

export default App;
