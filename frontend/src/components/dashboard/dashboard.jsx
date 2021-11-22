import React, { useState } from 'react';

export const Dashboard = (props) => {
  const { username } = props.currentUser;
  const [searchQuery, setSearchQuery] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result.items[0]);
          setThumbnail(result.items[0].volumeInfo.imageLinks.smallThumbnail);
          setTitle(result.items[0].volumeInfo.title);
        });
    } else {
      console.log('Search field cannot be empty.');
    }
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
      {thumbnail ? <img src={thumbnail} alt='thumbnail' /> : null}
      <br />
      {title ? <h3>{title}</h3> : null}
      <br />
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};
