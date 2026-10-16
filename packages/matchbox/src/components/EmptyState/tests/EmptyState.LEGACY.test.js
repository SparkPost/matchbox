import React from 'react';
import { render, fireEvent } from 'test-utils';
import EmptyState from '../EmptyState';
import { ChevronRight } from '@sparkpost/matchbox-icons';

describe('EmptyState', () => {
  let wrapper;

  const subject = (props) =>
    render(
      <EmptyState.LEGACY {...props}>
        <p>Nothing here yet!</p>
      </EmptyState.LEGACY>,
    ).container;

  it('renders with title', () => {
    wrapper = subject({ title: 'The Title' });
    const title = wrapper.querySelector('h1');
    expect(title.textContent).toEqual('The Title');
    expect(title).toHaveStyleRule('font-size', '600');
    expect(title).toHaveStyleRule('line-height', '600');
  });

  it('renders with image', () => {
    wrapper = subject({ image: ChevronRight });
    expect(wrapper.querySelector('svg')).toBeInTheDocument();
  });

  it('renders without any actions', () => {
    expect(wrapper.querySelector('button')).not.toBeInTheDocument();
  });

  it('renders primary action', () => {
    const onClick = jest.fn();
    wrapper = subject({
      primaryAction: { content: 'Primary Action', onClick: onClick },
    });
    fireEvent.click(wrapper.querySelector('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelector('button').textContent).toEqual('Primary Action');
  });

  it('renders secondary action', () => {
    const onClick = jest.fn();
    wrapper = subject({
      secondaryAction: { content: 'Secondary Action', onClick: onClick },
    });
    fireEvent.click(wrapper.querySelector('a'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelector('a').textContent).toEqual('Secondary Action');
  });
});
