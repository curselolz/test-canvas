import React from 'react';
import { render, screen } from '@testing-library/react';
import PointList from '../../point/PointList';
import '@testing-library/jest-dom';

test('renders list of points', () => {
  const points = [{ id: 1, x: 10, y: 20 }];
  render(
    <PointList points={points} updatePoint={() => {}} deletePoint={() => {}} />
  );
  const pointElement = screen.getByText((content, element) => {
    const hasText = (node: any) => node.textContent === '(10, 20)';
    const elementHasText = hasText(element);
    const childrenDontHaveText = Array.from(element?.children || []).every(
      (child) => !hasText(child)
    );
    return elementHasText && childrenDontHaveText;
  });
  expect(pointElement).toBeInTheDocument();
});


