import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetchMissions from '../helpers/fetchMissions';
import { getMissions } from '../redux/missions/missions';
import store from '../redux/storeConfig';
import OneMission from './OneMission';

const Missions = () => {
  useEffect(async () => {
    store.dispatch(getMissions(await fetchMissions()));
  }, []);

  const missions = useSelector((state) => state.missions)
  console.log(missions)

  return (
    <div>
      {console.log(missions)}
    </div>
  );
};

export default Missions;
