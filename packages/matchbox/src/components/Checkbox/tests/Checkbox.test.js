import React from 'react';
import Checkbox from '../Checkbox';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

describe('Checkbox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Checkbox />);
  });

  const testCases = [
    { name: 'checked', props: { checked: true }},
    { name: 'labelHidden', props: { labelHidden: true }},
    { name: 'disabled', props: { disabled: true }},
    { name: 'required', props: { required: true, label: 'Required field' }},
    { name: 'with label', props: { label: 'Check me!' }},
    { name: 'label with labelHidden', props: { label: 'This should not be visible', labelHidden: true }},
    { name: 'with error', props: { error: 'Checkbox error' }},
    { name: 'with helptext', props: { helpText: <p>This is helptext for checkbox</p> }},
    { name: 'with id', props: { id: 'chkCheckbox' }}
  ];

  cases('renders checkbox states', (opts) => {
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
    { name: 'onChange', event: 'change' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);

});

