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
    { name: 'large size', props: { size: 'large' }},
    { name: 'disabled', props: { disabled: true }},
    { name: 'destructive', props: { destructive: true }},
    { name: 'flat', props: { flat: true }},
    { name: 'flat with color', props: { flat: true, color: 'red' }},
    { name: 'flat with color and disabled', props: { flat: true, color: 'red', disabled: true }},
    { name: 'color navy', props: { color: 'navy' }},
    { name: 'outline enabled', props: { outline: true }},
    { name: 'fullWidth', props: { fullWidth: true }},
    { name: 'submit', props: { submit: true }},
    { name: 'external button', props: { external: true }},
    { name: 'to without component', props: { to: '/nocomp' }},
    { name: 'external to without component', props: { to: '/nocomp', external: true }},
    { name: 'to with component', props: { to: '/withcomp', component: jest.fn }},
    { name: 'to while disabled', props: { to: '/withcomp', component: jest.fn, disabled: true }},
    { name: 'deprecated prop - primary', props: { primary: true }}
  ];

  cases('renders button states', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes event', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);

    wrapper.simulate(opts.event);
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onClick', event: 'click' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);

  it('should handle mouse up', () => {
    const e = { currentTarget: { blur: jest.fn() }};
    wrapper.simulate('mouseUp', e);
    expect(e.currentTarget.blur).toHaveBeenCalled();
  });
});
