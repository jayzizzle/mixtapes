import React from 'react';

export const BookResults = (props) => {
  const { book, patchBookshelf, userId } = props;
  const { title, authors, imageLinks, description, previewLink, categories } =
    book.volumeInfo;

  const displayAuthors = (authors) => {
    if (!authors) return 'No Author Listed';
    let authorCount = authors.length;
    switch (true) {
      case authorCount === 1:
        return authors[0];
      case authorCount > 1:
        return authors.join(', ');
      default:
        return 'No Author Listed';
    }
  };

  const saveBookObject = (book) => {
    // FIGURE OUT HOW TO SAVE TO DB HERE !
    patchBookshelf(book, userId);
    return book;
  };

  const saveBook = (bookObject, destination) => {
    const { title, authors, imageLinks, description, previewLink, categories } =
      bookObject.volumeInfo;
    const book = {
      gBookId: bookObject.id,
      title: title,
      authors: displayAuthors(authors),
      thumbnail:
        imageLinks && imageLinks.smallThumbnail
          ? imageLinks.smallThumbnail
          : null,
      description: description ? description : null,
      previewLink: previewLink ? previewLink : null,
      categories: categories ? categories : null,
    };

    let newBookObject;

    switch (destination) {
      case 'bookshelf':
        console.log('Add To Bookshelf');
        newBookObject = saveBookObject(book);
        console.log(newBookObject);
        return;
      case 'wishlist':
        console.log('Add To Wishlist');
        newBookObject = saveBookObject(book);
        console.log(bookObject);
        return;
      default:
        console.log('No destination specified.');
        break;
    }
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
          <button onClick={() => saveBook(book, 'wishlist')}>
            Add To Wishlist
          </button>
        </div>
      </div>
    </li>
  );
};
