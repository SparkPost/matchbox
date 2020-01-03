import React from 'react';
import Stack from '../Stack';
import 'jest-styled-components';

describe('Stack', () => {
  it('it should render defaults correctly', () => {
    const wrapper = global.renderStyled(<Stack><div>1</div><div>2</div></Stack>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render with align and space props', () => {
    const wrapper = global.renderStyled(
      <Stack align='right' space='500'>
        <div>1</div><div>2</div>
      </Stack>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render with align responsive props', () => {
    const wrapper = global.renderStyled(
      <Stack align={['center', 'left']}>
        <div>1</div>
      </Stack>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
