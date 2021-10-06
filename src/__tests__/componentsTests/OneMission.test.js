import React from 'react';
import renderer from 'react-test-renderer';
import OneMission from '../../components/OneMission';

describe('OneMission', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OneMission reserved={false}
        id={'123'}
        name={'name'}
        description={'desc'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
