import React from 'react';

export const BookResults = (props) => {
  const { book } = props;

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
      {console.log(book.volumeInfo.authors)}
      {book.volumeInfo.title}
      &nbsp;by&nbsp;
      {/* {book.volumeInfo.authors} */}
      {book.volumeInfo.authors
        ? book.volumeInfo.authors.map((author) => author)
        : null}
    </li>
  );
};
