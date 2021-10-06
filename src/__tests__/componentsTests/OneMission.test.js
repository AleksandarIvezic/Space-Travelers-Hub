import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OneMission from '../../components/OneMission';

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
    render(<OneMission
      reserved={false}
      id="123"
      name="name"
      description="desc"
      />);

    const joinBtn = screen.getByText('Join Mission');
    fireEvent.click(joinBtn)
    screen.debug()
    expect(screen.getByText('Leave Mission')).not.toBeInTheDocument()
  })
})
