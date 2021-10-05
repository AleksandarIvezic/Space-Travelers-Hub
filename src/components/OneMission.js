import React from 'react';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/missions/missions';
import store from '../redux/storeConfig';

const OneMission = (props) => {
  const { name, description, id } = props;

  const handleJoin = (e) => {
    store.dispatch(joinMission(e.target.id));
  };

  return (
    <>
      <th scope="row">{name}</th>
      <td>{description}</td>
      <td>
        <span className="badge bg-secondary">NOT A MEMBER</span>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={handleJoin}
          id={id}
        >
          JoinMission
        </button>
      </td>
    </>
  );
};

OneMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default OneMission;
