import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Welcome to My App!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders description', () => {
  const { getByText } = render(<App />);
  const descriptionElement = getByText(/This is a demo application for Azure DevOps pipelines./i);
  expect(descriptionElement).toBeInTheDocument();
});
