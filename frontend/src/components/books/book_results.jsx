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

  const saveBook = (bookObject, destination) => {
    const { title, authors, imageLinks, description, previewLink, categories } =
      bookObject.volumeInfo;
    const book = {
      title: title,
      authors: authors,
      thumbnail: imageLinks.smallThumbnail,
      description: description,
      previewLink: previewLink,
      categories: categories,
    };
    console.log(book, destination);
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
          <span className='poppins large bold'>{title}</span>
          <br />
          <span className='italic'>{displayAuthors(authors)}</span>
          <br />
          <br />
          {description
            ? description.substring(0, 140) + '...'
            : 'No Description Available'}
          <br />
          <br />
          {categories ? (
            <span className='tag small bold'>{categories}</span>
          ) : null}
          <br />
          <br />
          <button onClick={() => saveBook(book, 'bookshelf')}>
            Add To Bookshelf
          </button>
          &nbsp;
          <button>Add To Wishlist</button>
        </div>
      </div>
    </li>
  );
};
