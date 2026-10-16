import React from 'react';
import { render, fireEvent } from 'test-utils';
import { tokens } from '@sparkpost/design-tokens';
import Pagination from '../Pagination';

global.matchMedia = function () {
  return {
    matches: true,
    media: '(max-width: 1080px)',
    onChange: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

describe('Pagination', () => {
  const props = {
    currentPage: 1,
    pages: 10,
    marginsHidden: true,
    pageRange: 3,
    onChange: jest.fn(),
    mb: 400,
  };
  const subject = () => render(<Pagination {...props} />).container;

  it('renders styles', () => {
    expect(subject().querySelectorAll('div')[1]).toHaveStyleRule('display', 'inline-flex');
    expect(subject().querySelectorAll('div')[1]).toHaveStyleRule('align-items', 'center');
  });

  it('renders system props (margin)', () => {
    expect(subject().querySelectorAll('div')[0]).toHaveStyleRule(
      'margin-bottom',
      tokens.spacing_400,
    );
  });

  it('renders active page styles correctly', () => {
    expect(subject().querySelectorAll('button')[1]).toHaveStyleRule('background', 'blue');
    expect(subject().querySelectorAll('button')[1]).toHaveStyleRule('color', 'white');
  });

  it('invokes onChange on page', () => {
    fireEvent.click(subject().querySelectorAll('button')[3]);
    expect(props.onChange).toHaveBeenCalledWith(2);
  });

  describe('invokes onChange when props change', () => {
    it('page', () => {
      const onChange = jest.fn();
      const { rerender } = render(<Pagination {...props} onChange={onChange} />);
      onChange.mockClear();
      rerender(<Pagination {...props} onChange={onChange} pages={11} />);
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it('currentPage', () => {
      const onChange = jest.fn();
      const { rerender } = render(<Pagination {...props} onChange={onChange} />);
      onChange.mockClear();
      rerender(<Pagination {...props} onChange={onChange} currentPage={4} />);
      expect(onChange).toHaveBeenCalledWith(3);
    });
  });

  it('renders the last page button unless marginsHidden is true', () => {
    const { queryByRole, rerender } = render(<Pagination {...props} marginsHidden={false} />);
    expect(queryByRole('button', { name: '10' })).toBeInTheDocument();
    rerender(<Pagination {...props} marginsHidden />);
    expect(queryByRole('button', { name: '10' })).not.toBeInTheDocument();
  });
});
