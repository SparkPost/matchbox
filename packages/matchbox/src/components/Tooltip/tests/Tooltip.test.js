import React from 'react';
import { render, fireEvent } from 'test-utils';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  const subject = (props) =>
    render(
      <Tooltip content="content test" id="test-id" {...props}>
        <button>test</button>
      </Tooltip>,
    ).container;

  // Tooltip portals its overlay into the end of document.body
  const overlay = () => document.body.lastElementChild.firstElementChild;
  const container = () => overlay().firstElementChild.firstElementChild;
  const content = () => container().firstElementChild;

  it('should render default styles correctly', () => {
    const wrapper = subject();
    fireEvent.mouseOver(wrapper.querySelector('button'));
    expect(wrapper.querySelectorAll('span')[2]).toHaveAttributeValue('id', 'test-id');
    expect(wrapper.querySelectorAll('span')[0]).toHaveStyleRule('display', 'inline-block');
    expect(container()).toHaveStyleRule('top', '100%');
    expect(container()).toHaveStyleRule('bottom', 'auto');
    expect(container()).toHaveStyleRule('left', '0');
    expect(container()).toHaveStyleRule('right', 'auto');
    expect(container()).toHaveStyleRule('margin-top', '100'); // Theme key not mocked in tests
    expect(container()).toHaveStyleRule('margin-bottom', '0');
    expect(container()).toHaveStyleRule('visibility', 'visible');
    expect(container()).toHaveStyleRule('opacity', '1');

    expect(content()).toHaveStyleRule('width', '13rem');
    expect(content()).toHaveStyleRule('background-color', 'gray.1000'); // Theme key not mocked in tests
  });

  it('should render with a width', () => {
    const wrapper = subject({ width: '100px' });
    fireEvent.mouseOver(wrapper.querySelector('button'));
    expect(content()).toHaveStyleRule('width', '100px');
  });

  it('should not toggle visibility when disabled', () => {
    const wrapper = subject({ disabled: true });
    fireEvent.mouseOver(wrapper.querySelector('button'));
    expect(container()).toHaveStyleRule('opacity', '0');
  });

  it('should render top and left', () => {
    const wrapper = subject({
      top: true,
      left: true,
    });
    fireEvent.mouseOver(wrapper.querySelector('button'));
    expect(container()).toHaveStyleRule('top', 'auto');
    expect(container()).toHaveStyleRule('bottom', '100%');
    expect(container()).toHaveStyleRule('left', 'auto');
    expect(container()).toHaveStyleRule('right', '0');
    expect(container()).toHaveStyleRule('margin-top', '0');
    expect(container()).toHaveStyleRule('margin-bottom', '100'); // Theme key not mocked in tests
  });

  it('should pass through system props', () => {
    const wrapper = subject({ bg: 'bg', fontSize: '400', pr: '500' });
    fireEvent.mouseOver(wrapper.querySelector('button'));
    expect(content()).toHaveStyleRule('background-color', 'bg');
    expect(content()).toHaveStyleRule('font-size', '1rem');
    expect(content()).toHaveStyleRule('padding-right', '1.5rem');
  });

  it('should render overlay', () => {
    const wrapper = subject();
    expect(overlay()).toHaveStyleRule('z-index', 'overlay');
    // These values are 0 but shows the positioning is working
    expect(overlay()).toHaveStyleRule('top', '0px');
    expect(overlay()).toHaveStyleRule('left', '0px');
    expect(overlay()).toHaveStyleRule('height', '0px');
    expect(overlay()).toHaveStyleRule('width', '0px');
  });

  it('should render with a block element wrapper', () => {
    const wrapper = subject({ as: 'div' });
    expect(wrapper.firstChild.tagName).toBe('DIV');
    expect(wrapper.firstChild).not.toHaveStyleRule('display');
  });
});
