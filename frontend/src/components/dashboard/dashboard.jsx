import React from 'react';

export const Dashboard = (props) => {
  console.log(props.currentUser);
  const { username } = props.currentUser;
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome back, <span className='capitalize italic'>{username}</span>!
      </p>
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};
