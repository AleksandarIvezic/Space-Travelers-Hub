import React from 'react';
import { Route } from 'react-router-dom';
import MyProfile from './MyProfile';

import '../style/App.css';
import Navbar from './Navbar';
import Missions from './Missions';

function App() {
  return (
    <>
      <Navbar />
      <Route path="/missions">
        <Missions />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
    </>
  );
}

export default App;
