import React from 'react';
import { shallow } from 'enzyme';

import Radio from '../Radio';
import cases from 'jest-in-case';

describe('Radio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Radio />);
  });

  const testCases = [
    { name: 'disabled', props: { disabled: true }},
    { name: 'checked', props: { checked: true }},
    { name: 'with name & id', props: { name: 'label1', id: 'label1Id' }},
    { name: 'label', props: { label: 'Radio Label' }},
    { name: 'label hidden', props: { label: 'Radio Label', labelHidden: true }},
    { name: 'value', props: { value: 'selected' }},
    { name: 'error', props: { error: 'There is an error' }},
    { name: 'helpText', props: { helpText: 'Radio Help Text' }}
  ];

  cases('renders radio', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes event', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);
    wrapper.find('input').simulate(opts.event, opts.args); //due to enzyme no propagating event, it needs to trigger on exact element
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onChange', event: 'change' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);

});
