import React from 'react';
import { shallow } from 'enzyme';
import Next from '../Next';

describe('Pager.Next', () => {
  it('renders button', () => {
    const wrapper = shallow(<Next />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    const wrapper = shallow(<Next disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Next onClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
