import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Contact Us form', () => {
  const { getByText } = render(<App />);
  const legend = getByText(/Contact Us/i);
  expect(legend).toBeInTheDocument();
});

test('renders field name information', () => {
  const { getByText } = render(<App />);
  const name = getByText(/Name/i);
  expect(name).toBeInTheDocument();
});

test('renders field email information', () => {
  const { getAllByText } = render(<App />);
  const email = getAllByText(/Email/i);
  expect(email[0]).toBeInTheDocument();
})

test('renders field birth date information', () => {
  const { getByText } = render(<App />);
  const birth = getByText(/Birth date/i);
  expect(birth).toBeInTheDocument();
})

