import React from 'react';
import Column from '../Column';

describe('Column', () => {
  const subject = props =>
    global
      .mountStyled(
        <Column {...props} data-id="test-id">
          <p>Grid</p>
        </Column>,
      )
      .find('div');

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });

  it('renders with default props', () => {
    const wrapper = subject();
    expect(wrapper).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper).toHaveStyleRule('max-width', '100%');
    expect(wrapper).toHaveStyleRule('padding-left', '1rem');
  });

  it('applies extra small sizing without media query', () => {
    const wrapper = subject({ xs: 6 });
    expect(wrapper).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper).toHaveStyleRule('flex', '0 0 50%');
    expect(wrapper).toHaveStyleRule('max-width', '50%');
    expect(wrapper).toHaveStyleRule('padding-left', '1rem');
  });

  it('applies extra small offset without media query', () => {
    const wrapper = subject({ xsOffset: 6 });
    expect(wrapper).toHaveStyleRule('box-sizing', 'border-box');
    expect(wrapper).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper).toHaveStyleRule('margin-left', '50%');
  });

  it('applies small sizing and offset with media query', () => {
    const wrapper = subject({ sm: 3, smOffset: 3 });
    expect(wrapper).toHaveStyleRule('flex', '1 0 0');
    expect(wrapper).toHaveStyleRule('flex', '0 0 25%', {
      media: 'only screen and (min-width: 720px)',
    });
    expect(wrapper).toHaveStyleRule('margin-left', '25%', {
      media: 'only screen and (min-width: 720px)',
    });
  });
});
