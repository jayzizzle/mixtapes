import React, { useState } from 'react';
import { BookResults } from './book_results';

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
      <ul>{books ? books.map((book) => <BookResults book={book} />) : null}</ul>
    </div>
  );
};
