import React from 'react';
import ComboBoxTextField from '../ComboBoxTextField';
import { tokens } from '@sparkpost/design-tokens';

describe('ComboBoxTextField', () => {
  const items = [{ content: 'foo' }, { content: 'bar' }];
  const itemToString = ({ content }) => content;
  const subject = (props = {}) =>
    global.mountStyled(
      <ComboBoxTextField
        id="test-id"
        selectedItems={items}
        itemToString={itemToString}
        {...props}
      />,
    );

  const input = wrapper => wrapper.find('input');
  const inputWrapper = wrapper => wrapper.find('div').at(1);
  const label = wrapper => wrapper.find('label');
  const helptext = wrapper => wrapper.find('div').last();
  const error = wrapper => wrapper.find('div').at(7);
  const tags = wrapper => wrapper.find('div').at(3);

  it('renders defaults correctly', () => {
    const wrapper = subject();
    expect(inputWrapper(wrapper)).toHaveStyleRule('background', tokens.color_white);
    expect(inputWrapper(wrapper)).toHaveStyleRule(
      'border',
      `${tokens.borderWidth_100} solid ${tokens.color_gray_400}`,
    );
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', null);
  });

  it('renders disabled correctly', () => {
    const wrapper = subject({ disabled: true });
    expect(inputWrapper(wrapper)).toHaveStyleRule('background', tokens.color_gray_200); // Token not mocked in tests
    expect(input(wrapper)).toHaveAttributeValue('disabled', '');
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
  });

  it('renders label with required correctly', () => {
    const wrapper = subject({ required: true, label: 'test label' });
    expect(label(wrapper).text()).toEqual('test label*');
    expect(input(wrapper)).toHaveAttributeValue('required', '');
  });

  it('renders hidden label correctly', () => {
    const wrapper = subject({ label: 'test label', labelHidden: true });
    expect(label(wrapper).text()).toEqual('test label');
    // This is a work around to check label is being hidden
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

  describe('selected items', () => {
    it('should render selected items correctly', () => {
      const wrapper = subject();
      expect(tags(wrapper).text()).toEqual('fooRemovebarRemove');
    });

    it('should render selected items with a delimiter correctly', () => {
      const wrapper = subject({ delimiter: 'or' });
      expect(tags(wrapper).text()).toEqual('fooRemoveorbarRemove');
    });

    it('should handle remove on a tag correctly', () => {
      const removeItem = jest.fn();
      const wrapper = subject({ removeItem });

      wrapper
        .find('button')
        .at(0)
        .simulate('click');
      expect(removeItem).toHaveBeenCalledWith({ content: 'foo' });
    });

    it('should not be removable when disabled', () => {
      const wrapper = subject({ disabled: true });
      expect(wrapper.find('button')).not.toExist();
    });

    it('should handle remove on a backspace correctly', () => {
      const removeItem = jest.fn();
      const wrapper = subject({ removeItem });

      wrapper.find('input').simulate('keyDown', { key: 'Backspace', shiftKey: false });
      expect(removeItem).toHaveBeenCalledWith({ content: 'bar' });
    });

    it('should not remove on a backspace with a value', () => {
      const removeItem = jest.fn();
      const wrapper = subject({ removeItem, value: 'test', onChange: jest.fn() });

      wrapper.find('input').simulate('keyDown', { key: 'Backspace', shiftKey: false });
      expect(removeItem).not.toHaveBeenCalled();
    });
  });
});
