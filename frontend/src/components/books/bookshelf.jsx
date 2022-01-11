import React, { useEffect } from 'react';

export const Bookshelf = (props) => {
  const { userId, getBookshelf } = props;

  useEffect(() => {
    getBookshelf(userId);
  }, [userId, getBookshelf]);

  if (!props.bookshelf) return null;

  return (
    <div>
      <h3>My Bookshelf</h3>
      <p>These are my books.</p>
      <ul>
        {props.bookshelf.map((book, i) => (
          <li key={i}>
            <a href={book.previewLink} target='_blank' rel='noreferrer'>
              <img src={book.thumbnail} alt={book.title} />
            </a>
            {`${book.title} - ${book.authors}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
