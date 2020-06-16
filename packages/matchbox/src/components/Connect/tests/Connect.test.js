import React from 'react';
import Connect from '../Connect';
import 'jest-styled-components';

describe('Connect', () => {
  const subject = props =>
    global.mountStyled(
      <Connect {...props}>
        <input type="text" />
      </Connect>,
    );

  it('renders correctly with connected components on left & right', () => {
    const wrapper = subject({
      left: <button>Button on Left</button>,
      right: <button>Button on Right</button>,
    });
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('flex', '0 0 auto');
    expect(wrapper.find('div').at(2)).toHaveStyleRule('flex', '1');
    expect(
      wrapper
        .find('div')
        .at(2)
        .find('input'),
    ).toExist();
    expect(wrapper.find('div').at(3)).toHaveStyleRule('flex', '0 0 auto');
  });

  it('renders correctly with connected components on left', () => {
    const wrapper = subject({
      left: <button>Button on Left</button>,
    });
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(
      wrapper
        .find('div')
        .at(1)
        .find('button'),
    ).toExist();
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('renders correctly with connected components on right', () => {
    const wrapper = subject({
      right: <button>Button on Right</button>,
    });
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(
      wrapper
        .find('div')
        .at(2)
        .find('button'),
    ).toExist();
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
