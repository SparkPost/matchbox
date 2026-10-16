import React from 'react';
import { render, fireEvent } from 'test-utils';
import ActionList from '../ActionList';

describe('ActionList', () => {
  const subject = (props) =>
    render(<ActionList id="test-id" role="listbox" {...props} />).container;

  it('renders actions correctly', () => {
    const wrapper = subject({
      children: (
        <>
          <ActionList.Action>Action</ActionList.Action>
          <ActionList.Action>Action 2</ActionList.Action>
        </>
      ),
    });
    expect(wrapper.querySelectorAll('a')[0].textContent).toEqual('Action');
    expect(wrapper.querySelector('#test-id[role="listbox"]')).toBeInTheDocument();
  });

  it('renders disabled actions correctly', () => {
    const onClick = jest.fn();
    const wrapper = subject({
      children: (
        <>
          <ActionList.Action disabled is="link" onClick={onClick}>
            Action
          </ActionList.Action>
          <ActionList.Action disabled is="button">
            Action 2
          </ActionList.Action>
        </>
      ),
    });
    expect(wrapper.querySelector('button')).toBeDisabled();
    fireEvent.click(wrapper.querySelector('a'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders help text correctly', () => {
    const wrapper = subject({
      children: (
        <>
          <ActionList.Action helpText="help1">Action</ActionList.Action>
          <ActionList.Action>Action 2</ActionList.Action>
        </>
      ),
    });
    expect(wrapper.querySelectorAll('a')[0].textContent).toEqual('Actionhelp1');
  });

  it('renders sections correctly', () => {
    const wrapper = subject({
      children: (
        <>
          <ActionList.Section>
            <ActionList.Action>Sectioned1</ActionList.Action>
            <ActionList.Action>Sectioned2</ActionList.Action>
          </ActionList.Section>
          <ActionList.Section>
            <ActionList.Action>Sectioned3</ActionList.Action>
            <ActionList.Action>Sectioned4</ActionList.Action>
          </ActionList.Section>
        </>
      ),
    });
    expect(wrapper.querySelectorAll('div')[1].textContent).toEqual('Sectioned1Sectioned2');
    expect(wrapper.querySelectorAll('div')[2].textContent).toEqual('Sectioned3Sectioned4');
  });
});

describe('Legacy ActionList', () => {
  const subject = (props) => render(<ActionList {...props} />).container;

  it('renders actions correctly', () => {
    const wrapper = subject({
      actions: [{ content: 'Action' }, { content: 'Action 2' }],
    });
    expect(wrapper.querySelectorAll('a')[0].textContent).toEqual('Action');
  });

  it('renders help text correctly', () => {
    const wrapper = subject({
      actions: [
        { content: 'Action', helpText: 'help1' },
        { content: 'Action 2', helpText: 'help2' },
      ],
    });
    expect(wrapper.querySelectorAll('a')[0].textContent).toEqual('Actionhelp1');
  });

  it('renders sections correctly', () => {
    const wrapper = subject({
      sections: [
        [{ content: 'Sectioned1' }, { content: 'Sectioned2' }],
        [{ content: 'Sectioned3' }, { content: 'Sectioned4' }],
      ],
    });
    expect(wrapper.querySelectorAll('div')[1].textContent).toEqual('Sectioned1Sectioned2');
    expect(wrapper.querySelectorAll('div')[2].textContent).toEqual('Sectioned3Sectioned4');
  });

  it('renders sections correctly using a group by key', () => {
    const wrapper = subject({
      groupByKey: 'groupBy',
      actions: [
        { content: 'Sectioned1', groupBy: 1 },
        { content: 'Sectioned2', groupBy: 1 },
        { content: 'Sectioned3', groupBy: 2 },
        { content: 'Sectioned4', groupBy: 4 },
      ],
    });
    expect(wrapper.querySelectorAll('div')[2].textContent).toEqual('Sectioned3');
  });

  it('renders a max height system prop as a number', () => {
    const wrapper = subject({
      maxHeight: 100,
    });
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('max-height', '100px');
  });

  it('renders a max height system prop as a string', () => {
    const wrapper = subject({
      maxHeight: '10rem',
    });
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('max-height', '10rem');
  });

  it('renders an action button', () => {
    const wrapper = subject({
      actions: [{ content: 'Action', is: 'button' }],
    });
    expect(wrapper.querySelector('button').textContent).toEqual('Action');
    expect(wrapper.querySelector('button')).toHaveAttributeValue('type', 'button');
  });
});
