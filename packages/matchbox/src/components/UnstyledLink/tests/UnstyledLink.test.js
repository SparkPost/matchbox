import React from 'react';
import UnstyledLink from '../UnstyledLink';

describe('UnstyledLink', () => {
  const subject = props => global.mountStyled(<UnstyledLink {...props}>Hola!</UnstyledLink>);

  it('renders an external link', () => {
    let wrapper = subject({ to: '/external', external: true });
    expect(wrapper).toHaveAttributeValue('target', '_blank');
    expect(wrapper.prop('role')).toBeUndefined();
  });

  it('renders with a role', () => {
    let wrapper = subject({ role: 'button' });
    expect(wrapper.find('a').prop('role')).toEqual('button');
  });

  it('renders with a role with onClick', () => {
    let wrapper = subject({ onClick: jest.fn() });
    expect(wrapper.find('a').prop('role')).toEqual('button');
  });

  it('renders with title', () => {
    let wrapper = subject({ title: 'The Title' });
    expect(wrapper).toHaveAttributeValue('title', 'The Title');
    expect(wrapper.prop('role')).toBeUndefined();
  });

  it('renders href', () => {
    let wrapper = subject({ to: '/link' });
    expect(wrapper).toHaveAttributeValue('href', '/link');
    expect(wrapper.prop('role')).toBeUndefined();
  });

  it('renders with wrapper component', () => {
    let wrapper = subject({ component: 'button' });
    expect(wrapper.find('button').text()).toEqual('Hola!');
    expect(wrapper.prop('role')).toBeUndefined();
  });

  it('renders with wrapper component with a role', () => {
    let wrapper = subject({ component: 'button', role: 'test-role' });
    expect(wrapper.find('button').text()).toEqual('Hola!');
    expect(wrapper.find('button').prop('role')).toEqual('test-role');
  });

  it('renders with a role as a to-link', () => {
    let wrapper = subject({ to: '/test', role: 'test-role' });
    expect(wrapper.find('a').text()).toEqual('Hola!');
    expect(wrapper.find('a').prop('role')).toEqual('test-role');
  });

  it('invokes an onClick handler', () => {
    const onClick = jest.fn();
    let wrapper = subject({ onClick });
    wrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets tabIndex correctly', () => {
    let wrapper = subject({ tabIndex: '3' });
    expect(wrapper).toHaveAttributeValue('tabindex', '3');
  });

  describe('disabled', () => {
    it('renders a disabled link correctly', () => {
      let wrapper = subject({ disabled: true, tabIndex: '3' });
      expect(wrapper).toHaveAttributeValue('aria-disabled', 'true');
      expect(wrapper).toHaveAttributeValue('tabindex', '-1');
      expect(wrapper.find('a').prop('disabled')).toEqual(true);
    });

    it('does not invoke an onClick handler', () => {
      const onClick = jest.fn();
      let wrapper = subject({ onClick, disabled: true });
      wrapper.find('a').simulate('click');
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
