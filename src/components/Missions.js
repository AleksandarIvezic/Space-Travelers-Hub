import React from 'react';
import { useSelector } from 'react-redux';
import OneMission from './OneMission';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions)

  return (
    <ul>
      {missions && missions.map((mission) => (
        <li key={mission.mission_id}>
          <OneMission name={mission.mission_name} />
        </li>
      ))}
    </ul>
  );
};

export default Missions;
