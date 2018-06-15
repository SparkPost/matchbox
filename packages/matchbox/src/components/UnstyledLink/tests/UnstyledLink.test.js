import React from 'react';
import UnstyledLink from '../UnstyledLink';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

describe('UnstyledLink', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UnstyledLink>Hola!</UnstyledLink>);
  });

  const testCases = [
    { name: 'external button', props: { external: true }},
    { name: 'to without component', props: { to: '/nocomp' }},
    { name: 'external to without component', props: { to: '/nocomp', external: true }},
    { name: 'to with component', props: { to: '/withcomp', component: jest.fn }}
  ];

  cases('renders link states', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);
});
