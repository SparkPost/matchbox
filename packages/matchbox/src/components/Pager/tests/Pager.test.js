import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import Pager from '../Pager';
import 'jest-styled-components';

describe('Pager', () => {
  const wrapper = global.mountStyled(
    <Pager mb="400">
      <Pager.Previous />
      <Pager.Next />
    </Pager>,
  );

  it('renders pager with buttons', () => {
    expect(wrapper.find(Pager.Previous)).toExist();
    expect(wrapper.find(Pager.Next)).toExist();
  });

  it('renders pager styles', () => {
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
    expect(wrapper).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });
});
