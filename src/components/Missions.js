import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../helpers/fetchMissions';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getMissions(await fetchMissions()))
  }, [])

  const data = useSelector((state) => state.missions)

  return (
    <div>Missions
    </div>
  );
};

export default Missions;
