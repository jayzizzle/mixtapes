import React, { useState } from 'react';

export const AddBook = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((res) => res.json())
        .then((result) => {
          setBooks(result.items);
        });
    } else {
      console.log('Search field cannot be empty.');
    }
  };

  return (
    <div className='main'>
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
      <ul>
        {books
          ? books.map((book) => (
              <li key={book.id}>
                {book.volumeInfo.imageLinks ? (
                  <img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt={book.volumeInfo.title}
                  />
                ) : (
                  <p>No Image Available</p>
                )}
                <br />
                {book.volumeInfo.title}
                &nbsp;by&nbsp;
                {book.volumeInfo.authors.length > 1
                  ? book.volumeInfo.authors[0]
                  : null}
                {console.log(book.volumeInfo.authors)}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
