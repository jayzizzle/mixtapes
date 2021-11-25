import React from 'react';

export const Header = (props) => {
  const { loggedIn } = props;
  if (!loggedIn) {
    return null;
  } else {
    return (
      <header>
        <p>This is the left header.</p>
        <p>This is the right header.</p>
      </header>
    );
  }
};
