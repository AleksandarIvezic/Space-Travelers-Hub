import React from 'react';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/missions/missions';
import store from '../redux/storeConfig';
import '../style/OneMission.css';

const OneMission = (props) => {
  const { name, description, id } = props;

  const handleJoin = (e) => {
    store.dispatch(joinMission(e.target.id));
  };

  const handleLeave = (e) => {
    console.log(e.target.id)
  }

  return (
    <>
      <th scope="row">{name}</th>
      <td><div className="descri">{description}</div></td>
      <td>
        <span className="badge bg-secondary">NOT A MEMBER</span>
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary mission-btn"
          onClick={handleJoin}
          id={id}
        >
          Join Mission
        </button>
        <button type="button" className="btn btn-sm btn-outline-danger mission-btn" onClick={handleLeave} id={id}>Leave Mission</button>
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
