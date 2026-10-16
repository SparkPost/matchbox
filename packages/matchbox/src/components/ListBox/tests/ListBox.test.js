import React from 'react';
import { ListBox } from '../../ListBox';
import { render, fireEvent } from 'test-utils';

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
    render(
      <ListBox {...props}>
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
      </ListBox>,
    ).container;

  it('should render with a default value', () => {
    const wrapper = subject({ defaultValue: 'option-1' });
    expect(wrapper.querySelector('button').textContent).toEqual('Option 1');
  });

  it('should render with required label', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-label');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('required', '');
  });

  it('should render with optional label', () => {
    const wrapper = subject({ optional: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-labelOptional');
  });

  it('should render with id', () => {
    const wrapper = subject({ id: 'test-id', label: 'test-label' });
    expect(wrapper.querySelector('label')).toHaveAttributeValue('for', 'test-idLabelButton');
    expect(wrapper.querySelector('button')).toHaveAttributeValue('id', 'test-idLabelButton');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('id', 'test-id');
  });

  it('should render with name', () => {
    const wrapper = subject({ name: 'test-name' });
    expect(wrapper.querySelector('input')).toHaveAttributeValue('name', 'test-name');
  });

  it('should render with help text', () => {
    const wrapper = subject({ id: 'test-id', helpText: 'test-help' });
    expect(Array.from(wrapper.querySelectorAll('div')).pop().textContent).toEqual('test-help');
    expect(wrapper.querySelector('button')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext',
    );
    expect(Array.from(wrapper.querySelectorAll('div')).pop()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('should render with error', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error' });
    expect(wrapper.querySelector('#test-id-error').textContent).toEqual('test-error');
  });

  it('should render with error and helptext describedby', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error', helpText: 'test-help' });
    expect(wrapper.querySelector('button')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('should render with error in label', () => {
    const wrapper = subject({ error: 'test-error', errorInLabel: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-labeltest-error');
  });

  it('should render options', () => {
    const wrapper = subject({ id: 'listbox-1', defaultValue: 'option-1' });

    fireEvent.click(wrapper.querySelector('button'));

    expect(document.querySelectorAll('li')).toHaveLength(2);
    expect(document.querySelector('li').textContent).toEqual('Option 1');
  });

  it('should render placeholder option', () => {
    const wrapper = subject({ placeholder: 'placeholder' });

    fireEvent.click(wrapper.querySelector('button'));

    expect(document.querySelectorAll('li')).toHaveLength(3);
    expect(document.querySelector('li').textContent).toEqual('placeholder');
  });
});
