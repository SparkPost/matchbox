import React from 'react';
import UnstyledLink from '../UnstyledLink';
// import cases from 'jest-in-case';
import 'jest-styled-components';

describe('UnstyledLink', () => {
  const subject = props => global.mountStyled(<UnstyledLink {...props}>Hola!</UnstyledLink>);

  // const testCases = [
  //   { name: 'external button', props: { external: true } },
  //   { name: 'to without component', props: { to: '/nocomp' } },
  //   { name: 'external to without component', props: { to: '/nocomp', external: true } },
  //   { name: 'to with component', props: { to: '/withcomp', component: jest.fn } },
  // ];

  it('renders correct styles', () => {
    let wrapper = subject();
    expect(wrapper).toHaveStyleRule('text-decoration', 'underline');
  });

  it('renders an external link', () => {
    let wrapper = subject({ external: true });
    expect(wrapper).toHaveAttributeValue('target', '_blank');
  });

  // cases('renders link states', (opts) => {
  //   const wrapper = subject(opts.props);
  //   expect(wrapper).toHaveStyleRule('text-decoration', 'underline');
  // }, testCases);
});
