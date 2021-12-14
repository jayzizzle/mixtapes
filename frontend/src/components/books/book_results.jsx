import React from 'react';

export const BookResults = (props) => {
  const { book } = props;
  const { title, authors, imageLinks, description, previewLink, categories } =
    book.volumeInfo;

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
      <div className='flex result-wrapper'>
        <div className='flex j-center result-image-wrapper'>
          <a href={previewLink} target='_blank' rel='noreferrer'>
            {imageLinks ? (
              <img
                src={imageLinks.smallThumbnail}
                alt={title}
                className='result-image'
              />
            ) : (
              <div className='flex j-center a-center result-image-none'>
                <p>
                  <strong>Image Not Available</strong>
                </p>
              </div>
            )}
          </a>
        </div>
        <div className='result-details'>
          {title}
          <br />
          {displayAuthors(authors)}
          <br />
          <br />
          {description
            ? description.substring(0, 42) + '...'
            : 'No Description Available'}
          {console.log(book)}
          <br />
          <br />
          {categories}
        </div>
      </div>
    </li>
  );
};
