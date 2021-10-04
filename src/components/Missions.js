import React from 'react';
import { useSelector } from 'react-redux';
import OneMission from './OneMission';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <ul>
      <div className="container table-responsive-sm">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
          {missions && missions.map((mission) => (
            <tr key={mission.mission_id}>
              <OneMission name={mission.mission_name} description={mission.description} />
            </tr>
          ))}
          </tbody>
        </table>
        {/* {missions && missions.map((mission) => (
          <li key={mission.mission_id}>
            <OneMission name={mission.mission_name} />
          </li>
        ))} */}
      </div>
    </ul>
  );
};

export default Missions;
