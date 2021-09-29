import React from 'react';
import { ListBox } from '../../ListBox';
import { render } from 'test-utils';

describe('Select', () => {
  it('renders with id and default attributes', () => {
    render(
      <ListBox id="test-id" data-track="true">
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
      </ListBox>,
    );
    expect(document.querySelector('input#test-id')).toBeTruthy();
    expect(document.querySelector('input[data-track="true"]')).toBeTruthy();
  });

  const subject = (props) =>
    global.mountStyled(
      <ListBox {...props}>
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
      </ListBox>,
    );

  it('should render with a default value', () => {
    const wrapper = subject({ defaultValue: 'option-1' });
    expect(wrapper.find('button').text()).toEqual('Option 1');
  });

  it('should render with required label', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-label');
    expect(wrapper.find('input')).toHaveAttributeValue('required', '');
  });

  it('should render with optional label', () => {
    const wrapper = subject({ optional: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-labelOptional');
  });

  it('should render with id', () => {
    const wrapper = subject({ id: 'test-id', label: 'test-label' });
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-idLabelButton');
    expect(wrapper.find('button')).toHaveAttributeValue('id', 'test-idLabelButton');
    expect(wrapper.find('input')).toHaveAttributeValue('id', 'test-id');
  });

  it('should render with name', () => {
    const wrapper = subject({ name: 'test-name' });
    expect(wrapper.find('input')).toHaveAttributeValue('name', 'test-name');
  });

  it('should render with help text', () => {
    const wrapper = subject({ id: 'test-id', helpText: 'test-help' });
    expect(wrapper.find('div').last().text()).toEqual('test-help');
    expect(wrapper.find('button')).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(wrapper.find('div').last()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('should render with error', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error' });
    expect(wrapper.find('#test-id-error').at(1).text()).toEqual('test-error');
  });

  it('should render with error and helptext describedby', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error', helpText: 'test-help' });
    expect(wrapper.find('button')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('should render with error in label', () => {
    const wrapper = subject({ error: 'test-error', errorInLabel: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-labeltest-error');
  });

  it('should render options', () => {
    const wrapper = subject({ id: 'listbox-1', defaultValue: 'option-1' });

    wrapper.find('button').simulate('click');

    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('li').first().text()).toEqual('Option 1');
  });

  it('should render placeholder option', () => {
    const wrapper = subject({ placeholder: 'placeholder' });

    wrapper.find('button').simulate('click');

    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('li').first().text()).toEqual('placeholder');
  });
});
