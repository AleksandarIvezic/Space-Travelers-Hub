import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Rocket = ({ name, image, description }) => (
  <li className="d-flex m-2 p-2">
    <div className="image mx-2">
      <img src={image} alt="rocket-img" width="250" height="180" />
    </div>
    <div className="text">
      <h3>{name}</h3>
      <p>{description}</p>
      <Button type="button" className="btn btn-primary">Reserve rocket</Button>
    </div>
  </li>
);

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
