import React from 'react';
import Grid from '../Grid';

describe('Grid', () => {
  const subject = props =>
    global
      .mountStyled(
        <Grid {...props}>
          <p>Grid</p>
        </Grid>,
      )
      .find('div');

  it('renders with default props', () => {
    const wrapper = subject();
    expect(wrapper).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper).toHaveStyleRule('flex', '0 1 auto');
    expect(wrapper).toHaveStyleRule('margin-left', '-1rem');
    expect(wrapper).not.toHaveStyleRule('align-items');
    expect(wrapper).not.toHaveStyleRule('justify-content');
    expect(wrapper).not.toHaveStyleRule('text-align');
  });

  it('applies extra small alignment without media query', () => {
    const wrapper = subject({ start: 'xs' });
    expect(wrapper).toHaveStyleRule('justify-content', 'flex-start');
    expect(wrapper).toHaveStyleRule('text-align', 'start');
  });

  it('applies small alignment with media query', () => {
    const wrapper = subject({ start: 'sm' });
    expect(wrapper).toHaveStyleRule('justify-content', 'flex-start', {
      media: 'only screen and (min-width: 720px)',
    });
    expect(wrapper).toHaveStyleRule('text-align', 'start', {
      media: 'only screen and (min-width: 720px)',
    });
  });
});
