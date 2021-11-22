import React from 'react';
import { Link } from 'react-router-dom';

export const Splash = () => {
  return (
    <div>
      <h1>On Read</h1>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </div>
  );
};
