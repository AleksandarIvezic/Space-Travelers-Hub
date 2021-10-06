import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Missions from '../../components/Missions';

describe('Missions', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Missions /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
