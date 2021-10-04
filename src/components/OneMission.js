import React from 'react';
import PropTypes from 'prop-types';

const OneMission = (props) => {
  const { name } = props;

  return (
    <p>{name}</p>
  );
};

OneMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OneMission;
