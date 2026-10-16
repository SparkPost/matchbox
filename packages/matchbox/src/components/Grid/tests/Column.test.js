import React from 'react';
import { render } from 'test-utils';
import Column from '../Column';

describe('Column', () => {
  const subject = (props) =>
    render(
        <Column {...props} data-id="test-id">
          <p>Grid</p>
        </Column>,
    ).container;

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
  });

  it('renders with default props', () => {
    const wrapper = subject();
    expect(wrapper.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper.firstChild).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper.firstChild).toHaveStyleRule('max-width', '100%');
    expect(wrapper.firstChild).toHaveStyleRule('padding-left', '1rem');
  });

  it('applies extra small sizing without media query', () => {
    const wrapper = subject({ xs: 6 });
    expect(wrapper.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper.firstChild).toHaveStyleRule('flex', '0 0 50%');
    expect(wrapper.firstChild).toHaveStyleRule('max-width', '50%');
    expect(wrapper.firstChild).toHaveStyleRule('padding-left', '1rem');
  });

  it('applies extra small offset without media query', () => {
    const wrapper = subject({ xsOffset: 6 });
    expect(wrapper.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper.firstChild).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper.firstChild).toHaveStyleRule('margin-left', '50%');
  });

  it('applies small sizing and offset with media query', () => {
    const wrapper = subject({ sm: 3, smOffset: 3 });
    expect(wrapper.firstChild).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper.firstChild).toHaveStyleRule('flex', '0 0 25%', {
      media: 'only screen and (min-width: 720px)',
    });
    expect(wrapper.firstChild).toHaveStyleRule('margin-left', '25%', {
      media: 'only screen and (min-width: 720px)',
    });
  });
});
