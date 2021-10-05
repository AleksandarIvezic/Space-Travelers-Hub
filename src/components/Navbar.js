import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My profile',
    },

  ];
  return (
    <nav className="d-flex justify-content-between align-items-center mx-4">
      <div className="heading d-flex">
        <img src="images/space-logo.png" alt="logo" width="50" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="d-flex align-items-center list-unstyled m-0 p-0">
        {links.map((link) => (
          <li
            key={link.id}
            className="m-0 p-0"
          >
            <NavLink
              className="px-3 text-decoration-none"
              to={link.path}
              activeClassName="active-link text-decoration-underline"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
