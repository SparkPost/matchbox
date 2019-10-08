import React from 'react';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

import Select from '../Select';

describe('Select', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      options: ['option 1']
    };

    wrapper = shallow(<Select {...props} />);
  });

  const testCases = [
    { name: 'disabled', props: { disabled: true }},
    { name: 'required', props: { required: true, label: 'Select Label' }},
    { name: 'label', props: { label: 'Select Label' }},
    { name: 'withId', props: { id: 'with-an-id' }},
    { name: 'helpText', props: { helpText: 'Select help text' }},
    { name: 'error', props: { label: 'An error occurred' }},
    { name: 'errorInLabel', props: { error: 'Error occurred', errorInLabel: true }},
    { name: 'with options', props: { options: ['option 1', 'option 2']}}
  ];

  cases('renders Select', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes event', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);
    wrapper.find('select').simulate(opts.event, opts.args); //due to enzyme no propagating event, it needs to trigger on exact element
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onChange', event: 'change' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);

  it('should render Option correctly', () => {
    wrapper.setProps({ options: ['option 1', 2, { label: 'three', value: 3, disabled: true } ]});
    const options = wrapper.find('Option');
    options.forEach((option) => expect(option.dive()).toMatchSnapshot());
  });
});
