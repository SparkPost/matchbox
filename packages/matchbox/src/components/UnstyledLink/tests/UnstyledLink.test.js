import React from 'react';
import UnstyledLink from '../UnstyledLink';
import 'jest-styled-components';

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
});
