import React from 'react';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

import TextField from '../TextField';

describe('TextField', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
    };

    wrapper = shallow(<TextField {...props} />);
  });

  const testCases = [
    { name: 'disabled', props: { disabled: true }},
    { name: 'label with required', props: { required: true, label: 'TextField Label' }},
    { name: 'label without required', props: { label: 'TextField Label' }},
    { name: 'hidden label', props: { label: 'TextField Label', labelHidden: true }},
    { name: 'helpText', props: { HelpText: 'TextField help text' }},
    { name: 'error', props: { error: 'An error occurred' }},
    { name: 'errorInLabel', props: { error: 'Error occurred', errorInLabel: true }},
    { name: 'with placehoders', props: { placehodler: 'Enter your email' }},
    { name: 'type email', props: { type: 'email' }},
    { name: 'type password', props: { type: 'password' }},
    { name: 'with multiline', props: { multiline: true }},
    { name: 'with style', props: { style: { textAlign: 'right' }}},
    { name: 'with prefix', props: { prefix: <span>Before Text</span>, prefixClassname: 'prefixclass' }},
    { name: 'with suffix', props: { suffix: <span>After Text</span>, suffixClassname: 'prefixclass' }},
    { name: 'with prefix & suffix', props: { prefix: <span>Before Text</span>, suffix: <span>After Text</span> }},
    { name: 'centered', props: { align: 'center' }},
    { name: 'right', props: { align: 'right' }}
  ];

  cases('renders TextField', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper).toMatchSnapshot();
  }, testCases);

  cases('invokes event', (opts) => {
    const fn = jest.fn();
    const newProps = {};
    newProps[opts.name] = fn;
    wrapper.setProps(newProps);

    wrapper.find('input').simulate(opts.event, opts.args); //not testing multiline
    expect(fn).toHaveBeenCalledTimes(1);
  }, [
    { name: 'onChange', event: 'change' },
    { name: 'onBlur', event: 'blur' },
    { name: 'onFocus', event: 'focus' }
  ]);

});
