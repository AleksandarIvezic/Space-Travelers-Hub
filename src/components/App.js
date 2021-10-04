import React from 'react';
import { Route } from 'react-router-dom';
import MyProfile from './MyProfile';

import '../style/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Route path="/my-profile">
        <MyProfile />
      </Route>
    </>
  );
}

export default App;
