import React from 'react';
import { render, fireEvent } from 'test-utils';
import UnstyledLink from '../UnstyledLink';

describe('UnstyledLink', () => {
  const subject = (props) => render(<UnstyledLink {...props}>Hola!</UnstyledLink>).container;

  it('renders an external link', () => {
    let wrapper = subject({ to: '/external', external: true });
    expect(wrapper.firstChild).toHaveAttributeValue('target', '_blank');
    expect(wrapper.firstChild.getAttribute('role')).toBeNull();
  });

  it('renders with a role', () => {
    let wrapper = subject({ role: 'button' });
    expect(wrapper.querySelector('a').getAttribute('role')).toEqual('button');
  });

  it('renders with a role with onClick', () => {
    let wrapper = subject({ onClick: jest.fn() });
    expect(wrapper.querySelector('a').getAttribute('role')).toEqual('button');
  });

  it('renders with title', () => {
    let wrapper = subject({ title: 'The Title' });
    expect(wrapper.firstChild).toHaveAttributeValue('title', 'The Title');
    expect(wrapper.firstChild.getAttribute('role')).toBeNull();
  });

  it('renders href', () => {
    let wrapper = subject({ to: '/link' });
    expect(wrapper.firstChild).toHaveAttributeValue('href', '/link');
    expect(wrapper.firstChild.getAttribute('role')).toBeNull();
  });

  it('supports deprecated wrapper component', () => {
    let wrapper = subject({ component: 'button' });
    expect(wrapper.querySelector('button').textContent).toEqual('Hola!');
    expect(wrapper.firstChild.getAttribute('role')).toBeNull();
  });

  it('renders with "as" component', () => {
    let wrapper = subject({ as: 'button' });
    expect(wrapper.querySelector('button').textContent).toEqual('Hola!');
    expect(wrapper.firstChild.getAttribute('role')).toBeNull();
  });

  it('renders with "as" wrapper component with a role', () => {
    let wrapper = subject({ as: 'button', role: 'test-role' });
    expect(wrapper.querySelector('button').textContent).toEqual('Hola!');
    expect(wrapper.querySelector('button').getAttribute('role')).toEqual('test-role');
  });

  it('renders with a role as a to-link', () => {
    let wrapper = subject({ to: '/test', role: 'test-role' });
    expect(wrapper.querySelector('a').textContent).toEqual('Hola!');
    expect(wrapper.querySelector('a').getAttribute('role')).toEqual('test-role');
  });

  it('invokes an onClick handler', () => {
    const onClick = jest.fn();
    let wrapper = subject({ onClick });
    fireEvent.click(wrapper.querySelector('a'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets tabIndex correctly', () => {
    let wrapper = subject({ tabIndex: '3' });
    expect(wrapper.firstChild).toHaveAttributeValue('tabindex', '3');
  });

  describe('disabled', () => {
    it('renders a disabled link correctly', () => {
      let wrapper = subject({ disabled: true, tabIndex: '3' });
      expect(wrapper.firstChild).toHaveAttributeValue('aria-disabled', 'true');
      expect(wrapper.firstChild).toHaveAttributeValue('tabindex', '-1');
      expect(wrapper.querySelector('a')).toHaveAttribute('disabled');
    });

    it('does not invoke an onClick handler', () => {
      const onClick = jest.fn();
      let wrapper = subject({ onClick, disabled: true });
      fireEvent.click(wrapper.querySelector('a'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
