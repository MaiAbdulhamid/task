import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi to User', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi/i);
  expect(linkElement).toBeInTheDocument();
});
