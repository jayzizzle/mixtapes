import React from 'react';

export const SearchResults = (props) => {
  const { books } = props;
  if (!books) return null;
  return (
    <div>
      <h4>Search Results</h4>
      <ul>{console.log(books)}</ul>
    </div>
  );
};
