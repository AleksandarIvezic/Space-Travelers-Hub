import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from './MyProfile';
import Rockets from './Rockets';

import '../style/App.css';
import Navbar from './Navbar';
import Missions from './Missions';
import store from '../redux/storeConfig';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
