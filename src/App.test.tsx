import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

test('renders Canvas Drawing App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Canvas Drawing App/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a point when Create Point button is clicked', () => {
  render(<App />);
  // Use getByRole to find the button element
  const createPointButton = screen.getByRole('button', { name: /Create Point/i });
  fireEvent.click(createPointButton);
  const pointElements = screen.getAllByRole('listitem');
  expect(pointElements.length).toBe(1);
});
