import React from 'react';
import { render } from '@testing-library/react';
import Herosection from './Herosection';
import '@testing-library/jest-dom/extend-expect';

test('renders Herosection component', () => {
  const { container } = render(<Herosection />);
  expect(container.firstChild).toBeInstanceOf(HTMLElement);
});

test('renders h1 with text "Hello, world!"', () => {
  const { getByText } = render(<Herosection />);
  const heading = getByText('Hello, world!');
  expect(heading).toBeInTheDocument();
});

test('renders p with text "This is a sample hero section."', () => {
  const { getByText } = render(<Herosection />);
  const paragraph = getByText('This is a sample hero section.');
  expect(paragraph).toBeInTheDocument();
});