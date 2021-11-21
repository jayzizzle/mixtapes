import React, { useState } from 'react';

export const Dashboard = (props) => {
  const { username } = props.currentUser;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let items = [];
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        items = result.items;
        console.log(items);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome back, <span className='capitalize italic'>{username}</span>!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <br />
        <button>Search</button>
      </form>
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};
