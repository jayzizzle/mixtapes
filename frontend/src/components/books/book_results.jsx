import React from 'react';

export const BookResults = (props) => {
  const { book } = props;
  const { title, authors, imageLinks, description } = book.volumeInfo;

  const displayAuthors = (authors) => {
    if (!authors) return 'No Author Listed';
    let authorCount = authors.length;
    switch (true) {
      case authorCount === 1:
        return authors;
      case authorCount > 1:
        return authors.join(', ');
      default:
        return 'No Author Listed';
    }
  };

  if (!book) return null;

  return (
    <li key={book.id}>
      <div className='flex'>
        <div>
          {imageLinks ? (
            <img src={imageLinks.smallThumbnail} alt={title} />
          ) : (
            <p>
              <strong>No Image Available</strong>
            </p>
          )}
        </div>
        <div>
          {title}
          <br />
          {displayAuthors(authors)}
          <br />
          {description
            ? description.substring(0, 42) + '...'
            : 'No Description Available'}
          {console.log(book)}
        </div>
      </div>
    </li>
  );
};
