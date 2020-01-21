import React from 'react';
import Stack from '../Stack';
import 'jest-styled-components';

describe('Stack', () => {
  const subject = (props) => global.mountStyled(
    <Stack {...props}>
      <span id='child-1'>1</span>
      <span id='child-2'>2</span>
    </Stack>
  );

  it('should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('#child-1').text()).toBe('1');
    expect(wrapper.find('#child-2').text()).toBe('2');
  });

  it('should render default spacing and alignment correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('div').at(0)).toHaveStyleRule('padding-bottom', '1rem');
    expect(wrapper.find('div').at(1)).not.toHaveStyleRule('padding-bottom');
    expect(wrapper.find('div').at(0)).not.toHaveStyleRule('align-items');
  });

  it('should render styled system spacing and custom alignment correctly', () => {
    const wrapper = subject({ space: '500', align: 'right' });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('padding-bottom', '1.5rem');
    expect(wrapper.find('div').at(1)).not.toHaveStyleRule('padding-bottom');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('align-items', 'flex-end');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('align-items', 'flex-end');
  });

  it('should render non-styled system spacing ', () => {
    const wrapper = subject({ space: '10px', align: 'right' });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('padding-bottom', '10px');
  });

  it('should render responsive spacing and alignment', () => {
    const wrapper = subject({ space: ['400', '50px'], align: ['right', 'center']});

    // Min
    expect(wrapper.find('div').at(0)).toHaveStyleRule('padding-bottom', '1rem');
    expect(wrapper.find('div').at(1)).not.toHaveStyleRule('padding-bottom');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('align-items', 'flex-end');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('align-items', 'flex-end');

    // First breakpoint
    const media = 'screen and (min-width:400px)';
    expect(wrapper.find('div').at(0)).toHaveStyleRule('padding-bottom', '50px', { media });
    expect(wrapper.find('div').at(1)).not.toHaveStyleRule('padding-bottom');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('align-items', 'center', { media });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('align-items', 'center', { media });
  });
});
