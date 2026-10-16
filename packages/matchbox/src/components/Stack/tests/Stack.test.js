import React from 'react';
import { render } from 'test-utils';
import Stack from '../Stack';

describe('Stack', () => {
  const subject = (props) =>
    render(
      <Stack {...props} data-id="test-id">
        {false && <span id="child-0">0</span>}
        <span id="child-1">1</span>
        <span id="child-2">2</span>
      </Stack>,
    ).container;

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('#child-1').textContent).toBe('1');
    expect(wrapper.querySelector('#child-2').textContent).toBe('2');
  });

  it('should render default spacing and alignment correctly', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('padding-bottom', '1.5rem');
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('align-items', undefined);
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('padding-bottom', undefined);
  });

  it('should render styled system spacing and custom alignment correctly', () => {
    const wrapper = subject({ space: '600', align: 'right' });
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('padding-bottom', '2rem');
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('padding-bottom', undefined);
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('align-items', 'flex-end');
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('align-items', 'flex-end');
  });

  it('should render non-styled system spacing ', () => {
    const wrapper = subject({ space: '10px', align: 'right' });
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('padding-bottom', '10px');
  });

  it('should render responsive spacing and alignment', () => {
    const wrapper = subject({ space: ['400', '50px'], align: ['right', 'center'] });

    // Min
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('padding-bottom', '1rem');
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('padding-bottom', undefined);
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('align-items', 'flex-end');
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('align-items', 'flex-end');

    // First breakpoint
    const media = 'screen and (min-width:400px)';
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('padding-bottom', '50px', {
      media,
    });
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('padding-bottom', undefined);
    expect(wrapper.querySelector('#child-1').parentElement).toHaveStyleRule('align-items', 'center', {
      media,
    });
    expect(wrapper.querySelector('#child-2').parentElement).toHaveStyleRule('align-items', 'center', {
      media,
    });
  });
});
