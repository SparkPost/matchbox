import React from 'react';
import UnstyledLink from '../UnstyledLink';
import 'jest-styled-components';

describe('UnstyledLink', () => {
  const subject = props => global.mountStyled(<UnstyledLink {...props}>Hola!</UnstyledLink>);

  it('renders correct styles', () => {
    let wrapper = subject();
    expect(wrapper).toHaveStyleRule('text-decoration', 'underline');
  });

  it('renders an external link', () => {
    let wrapper = subject({ to: '/external', external: true });
    expect(wrapper).toHaveAttributeValue('target', '_blank');
  });

  it('renders with title', () => {
    let wrapper = subject({ title: 'The Title' });
    expect(wrapper).toHaveAttributeValue('title', 'The Title');
  });

  it('renders href', () => {
    let wrapper = subject({ to: '/link' });
    expect(wrapper).toHaveAttributeValue('href', '/link');
  });

  it('renders with wrapper component', () => {
    let wrapper = subject({ component: 'button' });
    expect(wrapper.find('button').text()).toEqual('Hola!');
  });
});
