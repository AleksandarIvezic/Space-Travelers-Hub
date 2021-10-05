import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

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
    <nav className="d-flex flex-wrap justify-content-between align-items-center mx-4 mt-2">
      <div className="heading d-flex flex-wrap">
        <img src="images/space-logo.png" alt="logo" width="45" height="45" />
        <h1 className="mx-2">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="d-flex align-items-center list-unstyled m-0 p-0">
        {links.map((link) => (
          <li
            key={link.id}
            className="m-0 p-0 d-flex align-items-center"
          >
            <NavLink
              className="px-3 text-decoration-none"
              to={link.path}
              activeClassName="active-link text-decoration-underline"
              exact
            >
              {link.text}
            </NavLink>
            {(link.id === 2) && (
              <li className="line d-inline-block " />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
