import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Next from '../Next';

describe('Pager.Next', () => {
  let wrapper = global.mountStyled(<Next />);

  it('renders screen reader text', () => {
    expect(wrapper.find('span').text()).toEqual('Next');
  });

  it('renders disabled button', () => {
    wrapper = global.mountStyled(<Next disabled />);
    expect(wrapper.find(Next).is('[disabled]')).toBe(true);
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Next onClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
