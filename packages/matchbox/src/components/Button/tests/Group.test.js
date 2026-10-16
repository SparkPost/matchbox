import React from 'react';
import { render } from 'test-utils';
import Group from '../Group';
import Button from '../Button';
import { css } from 'styled-components';

describe('Group', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <Group>
        <button>Button 1</button>
        <button>Button 2</button>
      </Group>,
    ).container;
  });

  it('renders children correctly', () => {
    expect(wrapper.querySelector('button').textContent).toBe('Button 1');
    expect(Array.from(wrapper.querySelectorAll('button')).pop().textContent).toBe('Button 2');
  });

  it('sets classname if passed', () => {
    const { container } = render(
      <Group className="group-of-buttons">
        <button>Button 1</button>
      </Group>,
    );
    expect(container.firstChild).toHaveClass('group-of-buttons');
  });

  it('should render negative 1px margin', () => {
    const wrapper = render(
      <Button.Group>
        <div>Hola!</div>
        <div>Adios!</div>
      </Button.Group>,
    ).container;
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('margin-right', '-1px', {
      modifier: css`& > *`,
    });
  });
});
