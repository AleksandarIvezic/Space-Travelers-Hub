import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Navbar from '../../components/Navbar';

describe('Test if Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Navbar /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test if Navbar', () => {
  it('Rockets link response ', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    fireEvent.click(screen.getByText('Rockets'));
    screen.debug();
    expect(screen.getByTestId(1));
  });
});
