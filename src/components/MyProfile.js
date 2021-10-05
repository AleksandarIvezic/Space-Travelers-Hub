import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let reservedRockets;
  if (rockets) {
    reservedRockets = rockets.filter((rocket) => rocket.reserved);
  }

  const missions = useSelector((state) => state.missions.missions);
  let reservedMissions;
  if (missions) {
    reservedMissions = missions.filter((mission) => mission.reserved);
  }

  return (
    <div className="d-flex w-75 mx-auto mt-4">
      <div className="my-missions w-50 me-2">
        <h4>My Missions</h4>
        {reservedMissions && (
          <ul className="list-group">
            {reservedMissions.map((reservedMission) => (
              <li key={reservedMission.mission_id} className="list-group-item">{reservedMission.mission_name}</li>
            ))}
          </ul>
        )}

        {(!reservedMissions || !reservedMissions[0]) && (
          <h3 className="text-danger">Apparently you have not joined missions - yet</h3>
        )}
      </div>

      <div className="my-rockets w-50 ms-2">
        <h4>My Rockets</h4>
        {reservedRockets && (
          <ul className="my-rockets list-group">
            {reservedRockets.map((rocket) => (
              <li
                key={rocket.id}
                className="list-group-item"
              >
                {rocket.name}
              </li>
            ))}
          </ul>
        )}
        {(!reservedRockets || !reservedRockets[0]) && (
          <h4 className="text-danger m-4">No reserved rockets! :(</h4>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
