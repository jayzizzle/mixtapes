import React from 'react';

export const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};
