import React from 'react';
import 'jest-styled-components';

import Select from '../Select';

describe('Select', () => {
  const subject = props => global.mountStyled(<Select options={['option 1']} {...props} />);

  it('should render with a value', () => {
    const wrapper = subject({ value: 'test-value', onChange: jest.fn() });
    expect(wrapper.find('select').prop('value')).toEqual('test-value');
  });

  it('should render with required label', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-label *');
  });

  it('should render with id', () => {
    const wrapper = subject({ id: 'test-id', label: 'test-label' });
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-id');
    expect(wrapper.find('select')).toHaveAttributeValue('id', 'test-id');
  });

  it('should render with help text', () => {
    const wrapper = subject({ helpText: 'test-help' });
    expect(
      wrapper
        .find('div')
        .last()
        .text(),
    ).toEqual('test-help');
  });

  it('should render with error', () => {
    const wrapper = subject({ error: 'test-error' });
    expect(
      wrapper
        .find('div')
        .at(2)
        .text(),
    ).toEqual('test-error');
  });

  it('should render with error in label', () => {
    const wrapper = subject({ error: 'test-error', errorInLabel: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-labeltest-error');
  });

  it('should render string options', () => {
    const wrapper = subject({ options: ['1', '2'] });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('1');
  });

  it('should render object options', () => {
    const wrapper = subject({
      options: [
        { value: '1', label: 'one' },
        { value: '2', label: 'two' },
      ],
    });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('one');
  });

  it('should render placeholder option', () => {
    const wrapper = subject({ placeholder: 'placeholder', placeholderValue: '1' });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('placeholder');
  });

  it('should render no options', () => {
    const wrapper = subject({ options: [] });
    expect(wrapper.find('option')).toHaveLength(0);
  });

  it('should invoke events', () => {
    const events = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = subject({ ...events });
    wrapper.find('select').simulate('change');
    wrapper.find('select').simulate('focus');
    wrapper.find('select').simulate('blur');
    expect(events.onChange).toHaveBeenCalled();
    expect(events.onBlur).toHaveBeenCalled();
    expect(events.onFocus).toHaveBeenCalled();
  });
});
