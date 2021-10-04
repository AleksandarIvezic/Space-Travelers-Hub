import React from 'react';
import PropTypes from 'prop-types';

const OneMission = (props) => {
  const { name, description } = props;

  return (
    <>
      <th scope="row">{name}</th>
      <td>{description}</td>
      <td>
        <span class="badge bg-secondary">NOT A MEMBER</span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-sm btn-outline-secondary">JoinMission</button>
      </td>
    </>
  );
};

OneMission.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OneMission;
