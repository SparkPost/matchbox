import React from 'react';
import EmptyState from '../EmptyState';

import 'jest-styled-components';

describe('EmptyState Components', () => {
  const subject = props => global.mountStyled(<EmptyState {...props} />);

  it('renders header correctly', () => {
    const wrapper = subject({ children: <EmptyState.Header>The Header</EmptyState.Header> });
    expect(wrapper.text()).toEqual('The Header');
  });

  it('renders content correctly', () => {
    const wrapper = subject({ children: <EmptyState.Content>The Content</EmptyState.Content> });
    expect(wrapper.text()).toEqual('The Content');
  });

  it('renders with an image', () => {
    let wrapper = subject({ children: <EmptyState.Image src="/test.jpg" /> });
    expect(wrapper.find('img').props().src).toEqual('/test.jpg');
  });

  it('renders with actions', () => {
    const handleClick = jest.fn();
    let wrapper = subject({
      children: <EmptyState.Action onClick={handleClick}>EmptyState Action</EmptyState.Action>,
    });
    expect(wrapper.find('button').text()).toEqual('EmptyState Action');
    wrapper.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a margin system prop correctly', () => {
    let wrapper = subject({ margin: '100px' });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin', '100px');
  });
});
