import React from 'react';
import 'jest-styled-components';
import TextField from '../TextField';

describe('TextField', () => {
  const subject = props => global.mountStyled(<TextField id="test-id" {...props}></TextField>);

  const input = wrapper => wrapper.find('input');
  const label = wrapper => wrapper.find('label');
  const helptext = wrapper => wrapper.find('div').last();
  const error = wrapper => wrapper.find('div').at(4); // last with no label or help text
  const textarea = wrapper => wrapper.find('textarea');

  it('renders defaults correctly', () => {
    const wrapper = subject();
    expect(input(wrapper)).toHaveStyleRule('background-color', 'white');
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
    expect(input(wrapper)).toHaveAttributeValue('resize', null);
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', null);
  });

  it('renders disabled correctly', () => {
    const wrapper = subject({ disabled: true });
    expect(input(wrapper)).toHaveStyleRule('background-color', 'gray.200'); // Token not mocked in tests
    expect(input(wrapper)).toHaveAttributeValue('disabled', '');
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
  });

  it('renders label with required correctly', () => {
    const wrapper = subject({ required: true, label: 'test label' });
    expect(label(wrapper).text()).toEqual('test label*');
  });

  it('renders label without required correctly', () => {
    const wrapper = subject({ label: 'test label' });
    expect(label(wrapper).text()).toEqual('test label');

    // This is a work around to go along with the test below
    expect(label(wrapper)).toHaveStyleRule('font-weight', '500');
  });

  it('renders hidden label correctly', () => {
    const wrapper = subject({ label: 'test label', labelHidden: true });
    expect(label(wrapper).text()).toEqual('test label');

    // TODO uncomment when screen reader only component is converted to styled components
    // expect(label(wrapper)).toHaveStyleRule('visibility', 'hidden');
    // This is a work around to check label is being hidden for now
    expect(label(wrapper)).not.toHaveStyleRule('font-weight');
  });

  it('renders help text with id correctly', () => {
    const wrapper = subject({ helpText: 'help me' });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(helptext(wrapper).text()).toEqual('help me');
    expect(helptext(wrapper)).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('renders error with id correctly', () => {
    const wrapper = subject({ error: 'error oh no' });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(error(wrapper).text()).toEqual('error oh no');
    expect(error(wrapper)).toHaveAttributeValue('id', 'test-id-error');
  });

  it('renders error in label with id correctly', () => {
    const wrapper = subject({
      error: 'error oh no',
      errorInLabel: true,
      label: 'label',
    });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(label(wrapper).text()).toEqual('labelerror oh no');
    expect(label(wrapper).find('#test-id-error')).toExist();
  });

  it('renders error and helptext with ids correctly', () => {
    const wrapper = subject({
      error: 'error oh no',
      helpText: 'help me',
    });
    expect(input(wrapper)).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('renders with an input type', () => {
    const wrapper = subject({ type: 'password' });
    expect(input(wrapper)).toHaveAttributeValue('type', 'password');
  });

  it('renders multiline', () => {
    const wrapper = subject({ multiline: true });
    expect(textarea(wrapper)).toExist();
    expect(textarea(wrapper).prop('style').resize).toEqual('both');
  });

  it('renders alignment', () => {
    const wrapper = subject({ align: 'right' });
    expect(input(wrapper)).toHaveStyleRule('text-align', 'right');
  });

  it('renders prefix', () => {
    const wrapper = subject({
      prefix: <span id="prefix">Before Text</span>,
      prefixClassname: 'prefixclass',
    });
    expect(wrapper.find('#prefix')).toExist();
    expect(wrapper.find('span.prefixclass').text()).toEqual('Before Text');
  });

  it('renders suffix', () => {
    const wrapper = subject({
      suffix: <span id="suffix">After Text</span>,
      suffixClassname: 'suffixclass',
    });
    expect(wrapper.find('#suffix')).toExist();
    expect(wrapper.find('span.suffixclass').text()).toEqual('After Text');
  });

  it('renders readOnly correctly', () => {
    const wrapper = subject({ readOnly: true });
    expect(input(wrapper)).toHaveAttributeValue('readOnly', '');
  });

  it('invokes events', () => {
    const events = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = subject(events);
    input(wrapper).simulate('change');
    input(wrapper).simulate('blur');
    input(wrapper).simulate('focus');
    expect(events.onChange).toHaveBeenCalledTimes(1);
    expect(events.onBlur).toHaveBeenCalledTimes(1);
    expect(events.onFocus).toHaveBeenCalledTimes(1);
  });
});
