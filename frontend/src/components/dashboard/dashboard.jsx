import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = (props) => {
  const { username } = props.currentUser;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome back, <span className='capitalize italic'>{username}</span>!
      </p>
      <br />
      <ul>
        <li>
          <Link to='/addbook'>Add A Book</Link>
        </li>
      </ul>
      <br />
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};
