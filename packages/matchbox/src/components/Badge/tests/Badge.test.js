import React from 'react';
import Badge from '../Badge';
import { render, cleanup } from 'test-utils';

describe('Badge', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Badge>children</Badge>);
    expect(getByText('children')).toBeTruthy();
  });

  it('renders data id correctly', () => {
    const { getByTestId } = render(<Badge data-id="test-id">children</Badge>);
    expect(getByTestId('test-id')).toBeTruthy();
  });

  it('renders id correctly', () => {
    const { getById } = render(<Badge id="test-id">children</Badge>);
    expect(getById('test-id')).toBeTruthy();
  });

  it('renders all colors correctly', () => {
    const colors = ['lightGray', 'darkGray', 'green', 'red', 'blue', 'white', 'black'];

    colors.forEach(color => {
      const { getByText } = render(<Badge color={color}>children</Badge>);
      expect(getByText('children')).toBeTruthy();
      cleanup();
    });
  });
});
