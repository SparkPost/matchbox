import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Previous from '../Previous';

describe('Pager.Previous', () => {
  let wrapper = global.mountStyled(<Previous />);

  it('renders screen reader text', () => {
    expect(wrapper.find('span').text()).toEqual('Previous');
  });

  it('renders disabled button', () => {
    wrapper = global.mountStyled(<Previous disabled />);
    expect(wrapper.find(Previous).is('[disabled]')).toBe(true);
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Previous onClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
