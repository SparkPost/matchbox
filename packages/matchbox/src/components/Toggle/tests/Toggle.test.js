import React from 'react';
import Toggle from '../Toggle';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

describe('Toggle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toggle id='foo' value='bar'/>);
  });

  const testCases = [
    { name: 'checked', props: { checked: true }},
    { name: 'disabled', props: { disabled: true }},
    { name: 'compact', props: { compact: true }}
  ];

  cases('renders toggle states', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes event', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);

    wrapper.find('input').simulate(opts.event);
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onClick', event: 'click' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);
});
