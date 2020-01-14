import React from 'react';
import Inline from '../Inline';
import 'jest-styled-components';

describe('Inline', () => {
  const subject = (props) => global.mountStyled(<Inline {...props}><div>1</div><div>2</div></Inline>);

  it('it should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('Box').at(0).text()).toBe('1');
    expect(wrapper.find('Box').at(1).text()).toBe('2');
  });

  it('it should render spacing default and base styles correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('display', 'inline-flex');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '1rem');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '1rem');
    // TODO assert on alignment
  });

  it('it should render negative margins around wrappers', () => {
    const wrapper = subject({ spacing: '20px' });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', 'calc(-1rem - 1px)', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-1rem');
  });

  it('it should render a non-theme spacing value', () => {
    const wrapper = subject({ space: '20px' });
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '20px');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '20px');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', 'calc(-20px - 1px)', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-20px');
  });

  it('it should render with responsive spacing values', () => {
    const wrapper = subject({ space: ['50px', '100px']});
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '50px');
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '50px');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', 'calc(-50px - 1px)', { modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-50px');

    // In media query
    const media = 'screen and (min-width:400px)';
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-top', '100px', { media });
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('padding-left', '100px', { media });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-top', 'calc(-100px - 1px)', { media, modifier: ':before' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', '-100px', { media });
  });
});
