import React from 'react';
import {render, screen } from '@testing-library/react'
import Canvas from '../../canvas';
import '@testing-library/jest-dom';

test('renders points on the canvas', () => {
  const points = [{ id: 1, x: 10, y: 20 }];
  const { container } = render(<Canvas points={points} background={null} />);
  
  const pointElement = screen.getByRole('point', { name: /point at \(10, 20\)/i });
  expect(pointElement).toBeInTheDocument();
});
