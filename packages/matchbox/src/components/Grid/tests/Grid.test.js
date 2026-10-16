import React from 'react';
import { render } from 'test-utils';
import Grid from '../Grid';

describe('Grid', () => {
  const subject = (props) =>
    render(
        <Grid {...props}>
          <p>Grid</p>
        </Grid>,
    ).container;

  it('renders with default props', () => {
    const wrapper = subject();
    expect(wrapper.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper.firstChild).toHaveStyleRule('flex', '0 1 auto');
    expect(wrapper.firstChild).toHaveStyleRule('margin-left', '-1rem');
    expect(wrapper.firstChild).not.toHaveStyleRule('align-items');
    expect(wrapper.firstChild).not.toHaveStyleRule('justify-content');
    expect(wrapper.firstChild).not.toHaveStyleRule('text-align');
  });

  it('applies extra small alignment without media query', () => {
    const wrapper = subject({ start: 'xs' });
    expect(wrapper.firstChild).toHaveStyleRule('justify-content', 'flex-start');
    expect(wrapper.firstChild).toHaveStyleRule('text-align', 'start');
  });

  it('applies small alignment with media query', () => {
    const wrapper = subject({ start: 'sm' });
    expect(wrapper.firstChild).toHaveStyleRule('justify-content', 'flex-start', {
      media: 'only screen and (min-width: 720px)',
    });
    expect(wrapper.firstChild).toHaveStyleRule('text-align', 'start', {
      media: 'only screen and (min-width: 720px)',
    });
  });
});
