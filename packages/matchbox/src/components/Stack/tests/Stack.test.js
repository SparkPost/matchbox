import React from 'react';
import Stack from '../Stack';
import 'jest-styled-components';

describe('Stack', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(<Stack>Just a Stack</Stack>);
    expect(wrapper).toMatchSnapshot();
  });
});
