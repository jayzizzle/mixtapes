import React, { useEffect } from 'react';

export const Bookshelf = (props) => {
  const { userId, bookshelf, getBookshelf } = props;

  useEffect(() => {
    getBookshelf(userId);
  }, [getBookshelf, userId]);

  if (!bookshelf) return null;
  return (
    <div>
      <h3>My Bookshelf</h3>
      <p>These are my books.</p>
      <ul>
        {bookshelf.map((book, i) => (
          <li key={i}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
