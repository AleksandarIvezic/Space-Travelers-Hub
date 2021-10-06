import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import OneMission from '../../components/OneMission';
import store from '../../redux/storeConfig';

describe('OneMission', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OneMission
        reserved={false}
        id="123"
        name="name"
        description="desc"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('OneMission', () => {
  test('joins mission', () => {
    render(
      <Provider store={store}>
        <OneMission
          reserved={false}
          id="123"
          name="name"
          description="desc"
        />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Join Mission'));
    screen.debug();
    expect(screen.getByText('Join Mission'));
  });
});
