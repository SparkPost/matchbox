import React from 'react';
import { render, fireEvent } from 'test-utils';
import Tag from '../Tag';

describe('Tag', () => {
  it('should render a default tag', () => {
    const wrapper = render(<Tag>Hola!</Tag>).container;
    expect(wrapper.querySelector('button')).not.toBeInTheDocument();
  });

  it('should render with data-id and id', () => {
    const wrapper = render(
      <Tag id="id" data-id="data-id">
        Hola!
      </Tag>,
    ).container;
    expect(wrapper.querySelector('[data-id="data-id"]')).toBeInTheDocument();
    expect(wrapper.querySelector('#id')).toBeInTheDocument();
  });

  it('should render a remove button', () => {
    const wrapper = render(<Tag onRemove={jest.fn()}>Hola!</Tag>).container;
    expect(wrapper.querySelector('button').textContent).toEqual('Remove');
  });

  it('should handle remove on click', () => {
    const remove = jest.fn();
    const wrapper = render(<Tag onRemove={remove}>Hola!</Tag>).container;
    fireEvent.click(wrapper.querySelector('button'));
    expect(remove).toHaveBeenCalled();
  });
});
