import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let reservedRockets;
  if (rockets) {
    reservedRockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (
    <div className="d-flex">
      <ul className="my-missions w-50">
        <li>something</li>
      </ul>
      <div className="my-rockets w-50">
        <h4>My Rockets</h4>
        {reservedRockets && (
          <ul className="my-rockets list-group ">
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
