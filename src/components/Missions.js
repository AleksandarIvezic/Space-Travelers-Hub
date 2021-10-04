import React, { useEffect } from 'react';
import fetchMissions from '../helpers/fetchMissions';
import { getMissions } from '../redux/missions/missions';
import store from '../redux/storeConfig';

const Missions = () => {
  useEffect(async () => {
    store.dispatch(getMissions(await fetchMissions()))
  }, [])

  return (
    <div>Missions
    </div>
  );
};

export default Missions;
