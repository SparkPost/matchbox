import React from 'react';
import Tooltip from '../Tooltip';
import 'jest-styled-components';

describe('Tooltip', () => {
  const subject = props =>
    global.mountStyled(
      <Tooltip content="content test" id="test-id" {...props}>
        <button>test</button>
      </Tooltip>,
    );

  const container = wrapper => wrapper.find('div').at(1);
  const content = wrapper => wrapper.find('div').at(2);

  it('should render default styles correctly', () => {
    const wrapper = subject();
    expect(container(wrapper)).toHaveStyleRule('top', '100%');
    expect(container(wrapper)).toHaveStyleRule('bottom', 'auto');
    expect(container(wrapper)).toHaveStyleRule('left', '0');
    expect(container(wrapper)).toHaveStyleRule('right', 'auto');
    expect(container(wrapper)).toHaveStyleRule('margin-top', '100'); // Theme key not mocked in tests
    expect(container(wrapper)).toHaveStyleRule('margin-bottom', '0');
    expect(container(wrapper)).toHaveStyleRule('visibility', 'hidden');
    expect(container(wrapper)).toHaveStyleRule('opacity', '0');

    expect(content(wrapper)).toHaveStyleRule('font-size', '200'); // Theme key not mocked in tests
    expect(content(wrapper)).toHaveStyleRule('width', '13rem');
    expect(content(wrapper)).toHaveStyleRule('background-color', 'gray.1000'); // Theme key not mocked in tests
  });

  it('should render with a width', () => {
    const wrapper = subject({ width: '100px' });
    expect(content(wrapper)).toHaveStyleRule('width', '100px');
  });

  it('should toggle visibility', () => {
    const wrapper = subject();
    wrapper.find('button').simulate('mouseOver');
    expect(container(wrapper)).toHaveStyleRule('opacity', '1');
    expect(container(wrapper)).toHaveStyleRule('visibility', 'visible');
    expect(container(wrapper)).toHaveStyleRule('transform', 'scale(1)');
    wrapper.find('button').simulate('mouseOut');
    expect(container(wrapper)).toHaveStyleRule('opacity', '0');
    expect(container(wrapper)).toHaveStyleRule('visibility', 'hidden');
    expect(container(wrapper)).toHaveStyleRule('transform', 'scale(0.96)');
  });

  it('should not toggle visibility when disabled', () => {
    const wrapper = subject({ disabled: true });
    wrapper.find('button').simulate('mouseOver');
    expect(container(wrapper)).toHaveStyleRule('opacity', '0');
  });

  it('should render top and left', () => {
    const wrapper = subject({
      top: true,
      left: true,
    });
    expect(container(wrapper)).toHaveStyleRule('top', 'auto');
    expect(container(wrapper)).toHaveStyleRule('bottom', '100%');
    expect(container(wrapper)).toHaveStyleRule('left', 'auto');
    expect(container(wrapper)).toHaveStyleRule('right', '0');
    expect(container(wrapper)).toHaveStyleRule('margin-top', '0');
    expect(container(wrapper)).toHaveStyleRule('margin-bottom', '100'); // Theme key not mocked in tests
  });

  it('should pass through system props', () => {
    const wrapper = subject({ bg: 'blue', fontSize: '400', pr: '500' });
    expect(content(wrapper)).toHaveStyleRule('background-color', 'blue');
    expect(content(wrapper)).toHaveStyleRule('font-size', '1rem');
    expect(content(wrapper)).toHaveStyleRule('padding-right', '1.5rem');
  });

  it('should render overlay', () => {
    const wrapper = subject();
    expect(wrapper.find('span').at(0)).toHaveStyleRule('z-index', '1000');
    expect(wrapper.find('span').at(0)).toHaveAttributeValue('id', 'test-id');
    // These values are 0 but shows the positioning is working
    expect(wrapper.find('span').at(0)).toHaveStyleRule('top', '0');
    expect(wrapper.find('span').at(0)).toHaveStyleRule('left', '0');
    expect(wrapper.find('span').at(1)).toHaveStyleRule('height', '0');
  });
});
