import React from 'react';
import Group from '../Group';
import Button from '../Button';
import { css } from 'styled-components';

describe('Group', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = global.mountStyled(
      <Group>
        <button>Button 1</button>
        <button>Button 2</button>
      </Group>,
    );
  });

  it('renders children correctly', () => {
    expect(
      wrapper
        .find('button')
        .first()
        .text(),
    ).toBe('Button 1');
    expect(
      wrapper
        .find('button')
        .last()
        .text(),
    ).toBe('Button 2');
  });

  it('sets classname if passed', () => {
    wrapper.setProps({ className: 'group-of-buttons' });
    expect(wrapper).toHaveClassName('group-of-buttons');
  });

  it('should render negative 1px margin', () => {
    const wrapper = global.mountStyled(
      <Button.Group>
        <div>Hola!</div>
        <div>Adios!</div>
      </Button.Group>,
    );
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-right', '-1px', {
      modifier: css`& > *`,
    });
  });
});
