import React from 'react';
import Group from '../Group';
import Button, { StyledButton } from '../Button';
import { shallow } from 'enzyme';
import { css } from 'styled-components';
import 'jest-styled-components';

describe('Group', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Group>
        <button>Button 1</button>
        <button>Button 2</button>
      </Group>,
    );
  });

  it('renders children correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets classname if passed', () => {
    wrapper.setProps({ className: 'group-of-buttons' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render negative 1px margin', () => {
    const wrapper = global.mountStyled(
      <Button.Group>
        <Button>Hola!</Button>
        <Button>Adios!</Button>
      </Button.Group>,
    );
    expect(wrapper.find(Button.Group)).toHaveStyleRule('margin-right', '-1px', {
      modifier: css`& > ${StyledButton}`,
    });
  });
});
