import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button>Hola!</Button>);
  });

  const testCases = [
    { name: 'disabled', props: { disabled: true }},
    { name: 'destructive', props: { destructive: true }},
    { name: 'flat', props: { flat: true }},
    { name: 'color navy', props: { color: 'navy' }},
    { name: 'outline enabled', props: { outline: true }},
    { name: 'outline orange', props: { outline: true, color: 'orange' }},
    { name: 'large size', props: { size: 'large' }},
    { name: 'fullWidth', props: { fullWidth: true }},
    { name: 'submit', props: { submit: true }},
    { name: 'external button', props: { external: true }},
    { name: 'to without component', props: { to: '/nocomp' }},
    { name: 'to with component', props: { to: '/withcomp', component: jest.fn }}
  ];

  cases('renders button states', (opts) => {
    const newProps = {};
    newProps[opts.prop] = opts.val;

    wrapper.setProps(opts.props);

    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);

    wrapper.simulate(opts.event.toLowerCase());
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onClick', event: 'Click' },
    { name: 'onBlur', event: 'Blur' },
    { name: 'onFocus', event: 'Focus' }
  ]);
});

