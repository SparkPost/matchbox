import React from 'react';
import { render, fireEvent } from 'test-utils';
import EmptyState from '../EmptyState';
import { Picture } from '../../Picture';

describe('EmptyState Components', () => {
  const subject = (props) => render(<EmptyState {...props} />).container;

  it('renders header correctly', () => {
    const wrapper = subject({ children: <EmptyState.Header>The Header</EmptyState.Header> });
    expect(wrapper.textContent).toEqual('The Header');
    expect(wrapper.querySelector('h1')).toBeInTheDocument();
  });

  it('renders header with and as prop correctly', () => {
    const wrapper = subject({
      children: <EmptyState.Header as="h3">The Header</EmptyState.Header>,
    });
    expect(wrapper.querySelector('h3')).toBeInTheDocument();
  });

  it('renders content correctly', () => {
    const wrapper = subject({ children: <EmptyState.Content>The Content</EmptyState.Content> });
    expect(wrapper.textContent).toEqual('The Content');
  });

  it('renders with an image', () => {
    let wrapper = subject({ children: <EmptyState.Image src="/test.jpg" /> });
    expect(wrapper.querySelector('img').getAttribute('src')).toEqual('/test.jpg');
  });

  it('renders media correctly', () => {
    let wrapper = subject({
      children: (
        <EmptyState.Media>
          <Picture seeThrough>
            <Picture.Image src="/mediatest.jpg" />
          </Picture>
        </EmptyState.Media>
      ),
    });
    expect(wrapper.querySelector('img').getAttribute('src')).toEqual('/mediatest.jpg');
  });

  it('renders with actions', () => {
    const handleClick = jest.fn();
    let wrapper = subject({
      children: <EmptyState.Action onClick={handleClick}>EmptyState Action</EmptyState.Action>,
    });
    expect(wrapper.querySelector('button').textContent).toEqual('EmptyState Action');
    fireEvent.click(wrapper.querySelector('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a margin system prop correctly', () => {
    let wrapper = subject({ margin: '100px' });
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('margin', '100px');
  });
});
