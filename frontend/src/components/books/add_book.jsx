import React, { useState } from 'react';

export const AddBook = () => {
  // const { username } = props.currentUser;
  const [resultArray, setResultArray] = useState([]);
  // let resultArray;
  const [searchQuery, setSearchQuery] = useState('');
  // const [thumbnail, setThumbnail] = useState('');
  // const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (thumbnail) setThumbnail('');
    if (searchQuery) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((res) => res.json())
        .then((result) => {
          const updateResults = [...resultArray, ...result.items];
          setResultArray(updateResults);
          // resultArray = result.items;
          console.log(result.items, 'resultItems');
          console.log(resultArray, 'resultArray');
          console.log(updateResults);
          // console.log(result.items[0]);
          // if (result.items[0].volumeInfo.imageLinks) {
          //   setThumbnail(result.items[0].volumeInfo.imageLinks.smallThumbnail);
          // }
          // setTitle(result.items[0].volumeInfo.title);
        });
    } else {
      console.log('Search field cannot be empty.');
    }
  };

  const resultList = (resultArray) => {
    if (resultArray) {
      resultArray.map((book) => (
        <li>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : null
            }
            alt='thumbnail'
          />
          <br />
          <h4>{book.volumeInfo.title}</h4>
        </li>
      ));
    }
  };

  return (
    <div>
      <h2>Add a Book</h2>
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
      <br />
      <ul>{resultList(resultArray)}</ul>
      {/* {thumbnail ? <img src={thumbnail} alt='thumbnail' /> : null}
      <br />
      {title ? <h3>{title}</h3> : null}
      <br /> */}
    </div>
  );
};
