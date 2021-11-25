import React from 'react';

export const Header = (props) => {
  const { loggedIn, currentUser } = props;
  const menuItems = ['My Bookshelf', 'Wish List', 'Recommendation List'];

  if (!loggedIn) {
    return null;
  } else {
    return (
      <header>
        <div>
          Welcome back,&nbsp;
          <span className='capitalize italic'>{currentUser.username}</span>!
        </div>
        <div>
          <ul>
            {menuItems.map((menuItem, i) => (
              <li key={i}>{menuItem}</li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
};
