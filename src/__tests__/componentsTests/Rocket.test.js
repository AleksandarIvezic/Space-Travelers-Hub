import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/storeConfig';
import Rocket from '../../components/Rocket';

describe('Test if Rocket', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket
            key={1}
            name="Rocket name"
            image="image link"
            description="rocket description"
            id={1}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
