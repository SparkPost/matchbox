import React from 'react';
import EmptyState from '../EmptyState';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import 'jest-styled-components';

describe('EmptyState', () => {
  let wrapper;

  const subject = props =>
    global.mountStyled(
      <EmptyState.LEGACY {...props}>
        <p>Nothing here yet!</p>
      </EmptyState.LEGACY>,
    );

  it('renders with title', () => {
    wrapper = subject({ title: 'The Title' });
    const title = wrapper.find('h1');
    expect(title.text()).toEqual('The Title');
    expect(title).toHaveStyleRule('font-size', '600');
    expect(title).toHaveStyleRule('line-height', '600');
  });

  it('renders with image', () => {
    wrapper = subject({ image: ChevronRight });
    expect(wrapper.find(ChevronRight)).toExist();
  });

  it('renders without any actions', () => {
    expect(wrapper.find('button')).not.toExist();
  });

  it('renders primary action', () => {
    const onClick = jest.fn();
    wrapper = subject({
      primaryAction: { content: 'Primary Action', onClick: onClick },
    });
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').text()).toEqual('Primary Action');
  });

  it('renders secondary action', () => {
    const onClick = jest.fn();
    wrapper = subject({
      secondaryAction: { content: 'Secondary Action', onClick: onClick },
    });
    wrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.find('a').text()).toEqual('Secondary Action');
  });
});
