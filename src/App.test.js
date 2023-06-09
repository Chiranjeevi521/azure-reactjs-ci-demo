import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Welcome to App!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders description', () => {
  const { getByText } = render(<App />);
  const descriptionElement = getByText(/This is a demo application for Azure DevOps pipelines./i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders fruit name', () => {
  const { getByText } = render(<App />);
  const descriptionElement = getByText(/Cherry/i);
  expect(descriptionElement).toBeInTheDocument();
});
