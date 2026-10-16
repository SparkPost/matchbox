import React from 'react';
import { render } from 'test-utils';
import Connect from '../Connect';

describe('Connect', () => {
  const subject = (props) =>
    render(
      <Connect {...props}>
        <input type="text" />
      </Connect>,
    ).container;

  it('renders correctly with connected components on left & right', () => {
    const wrapper = subject({
      left: <button>Button on Left</button>,
      right: <button>Button on Right</button>,
    });
    expect(wrapper.firstChild).toHaveStyleRule('display', 'flex');
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('flex', '0 0 auto');
    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('flex', '1');
    expect(wrapper.querySelectorAll('div')[2].querySelector('input')).toBeInTheDocument();
    expect(wrapper.querySelectorAll('div')[3]).toHaveStyleRule('flex', '0 0 auto');
  });

  it('renders correctly with connected components on left', () => {
    const wrapper = subject({
      left: <button>Button on Left</button>,
    });
    expect(wrapper.firstChild).toHaveStyleRule('display', 'flex');
    expect(wrapper.querySelectorAll('div')[1].querySelector('button')).toBeInTheDocument();
    expect(wrapper.querySelectorAll('button')).toHaveLength(1);
  });

  it('renders correctly with connected components on right', () => {
    const wrapper = subject({
      right: <button>Button on Right</button>,
    });
    expect(wrapper.firstChild).toHaveStyleRule('display', 'flex');
    expect(wrapper.querySelectorAll('div')[2].querySelector('button')).toBeInTheDocument();
    expect(wrapper.querySelectorAll('button')).toHaveLength(1);
  });
});
