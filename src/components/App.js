import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyProfile from './MyProfile';
import Rockets from './Rockets';

import '../style/App.css';
import Navbar from './Navbar';
import Missions from './Missions';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
