import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ name }) => <li>{name}</li>;

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
};
