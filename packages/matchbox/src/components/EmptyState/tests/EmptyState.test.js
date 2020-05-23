import React from 'react';
import EmptyState from '../EmptyState';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('EmptyState', () => {
  let wrapper;

  const subject = props =>
    global.mountStyled(
      <EmptyState {...props}>
        <p>Nothing here yet!</p>
      </EmptyState>,
    );

  it('renders with title', () => {
    wrapper = subject({ title: 'The Title' });
    const title = wrapper.find('h1');
    expect(title.text()).toEqual('The Title');
    expect(title).toHaveStyleRule('font-size', tokens.fontSize_700);
    expect(title).toHaveStyleRule('line-height', tokens.lineHeight_700);
  });

  it('renders with image', () => {
    wrapper = subject({ image: ChevronRight });
    const image = wrapper.find('div').at(3);
    expect(wrapper.find('svg')).toExist();
    expect(image).toHaveStyleRule('top', '45%');
    expect(image).toHaveStyleRule('left', '45%');
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
