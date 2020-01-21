import React from 'react';
import Inline from '../Inline';
import 'jest-styled-components';

describe('Inline', () => {
  const subject = (props) => global.mountStyled(<Inline {...props}><div>1</div><div>2</div></Inline>);

  it('should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('Box').at(0).text()).toBe('1');
    expect(wrapper.find('Box').at(1).text()).toBe('2');
  });

  it('should render spacing default and base styles correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '1rem');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '1rem');
    expect(wrapper.find('div').at(1)).not.toHaveStyleRule('justify-content');
  });

  it('should render alignment', () => {
    const wrapper = subject({ align: 'right' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should render negative margins around wrappers', () => {
    const wrapper = subject({ spacing: '20px' });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', '-1rem', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-1rem');
  });

  it('should render a non-theme spacing value', () => {
    const wrapper = subject({ space: '20px' });
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '20px');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '20px');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', '-20px', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-20px');
  });

  it('should render with responsive spacing and alignment values', () => {
    const wrapper = subject({ space: ['50px', '100px'], align: ['center', 'left']});
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '50px');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '50px');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', '-50px', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-50px');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('justify-content', 'center');

    // In media query
    const media = 'screen and (min-width:400px)';
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '100px', { media });
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '100px', { media });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', '-100px', { media, modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-100px', { media });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('justify-content', 'flex-start', { media });
  });
});
