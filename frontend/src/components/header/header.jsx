import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  const { loggedIn, currentUser } = props;
  const menuItems = [
    { title: 'My Bookshelf', url: '/bookshelf' },
    { title: 'Wish List', url: '/wishlist' },
    { title: 'Recommendations', url: '/recommendations' },
  ];

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
          <ul className='flex j-evenly a-center header-links'>
            {menuItems.map((menuItem, i) => (
              <li key={i}>
                <NavLink to={menuItem.url}>{menuItem.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
};
