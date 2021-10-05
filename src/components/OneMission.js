import React from 'react';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missions';
import store from '../redux/storeConfig';

const OneMission = (props) => {
  const { name, description, id, reserved } = props;

  const handleJoin = (e) => {
    store.dispatch(joinMission(e.target.id));
  };

  const handleLeave = (e) => {
    store.dispatch(leaveMission(e.target.id));
    console.log(reserved)
  };

  return (
    <>
      <th scope="row">{name}</th>
      <td><div className="descri">{description}</div></td>
      <td>
        {reserved && (
          <span className="badge bg-info">Active Member</span>
        )}

        {!reserved && (
          <span className="badge bg-secondary">NOT A MEMBER</span>
        )}
      </td>
      <td className="text-center">
        {!reserved && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary mission-btn"
            onClick={handleJoin}
            id={id}
          >
            Join Mission
          </button>
        )}

        {reserved && (
          <button type="button" className="btn btn-sm btn-outline-danger mission-btn" onClick={handleLeave} id={id}>Leave Mission</button>
        )}
      </td>
    </>
  );
};

OneMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool
};

export default OneMission;
