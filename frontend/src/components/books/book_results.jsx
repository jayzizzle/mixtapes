import React from 'react';

export const BookResults = (props) => {
  const { book } = props;

  const displayAuthors = (authors) => {
    if (!authors) return 'No Author Listed';
    let authorCount = authors.length;
    console.log(authors);
    switch (true) {
      case authorCount === 1:
        return authors;
      case authorCount > 1:
        return 'Multiple Authors';
      default:
        return 'No Author Listed';
    }
  };

  if (!book) return null;

  return (
    <li key={book.id}>
      {book.volumeInfo.imageLinks ? (
        <img
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
      ) : (
        <p>
          <strong>No Image Available</strong>
        </p>
      )}
      <br />
      {book.volumeInfo.title}
      &nbsp;by&nbsp;
      {displayAuthors(book.volumeInfo.authors)}
      {/* {book.volumeInfo.authors
        ? book.volumeInfo.authors.map((author) => author)
        : null} */}
    </li>
  );
};
