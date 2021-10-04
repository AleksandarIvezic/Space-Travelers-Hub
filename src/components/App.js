import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyProfile from './MyProfile';
import Rockets from './Rockets';
import { loadRocketsThunk } from '../redux/rockets/rockets';

import '../style/App.css';
import Navbar from './Navbar';
import Missions from './Missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRocketsThunk());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
