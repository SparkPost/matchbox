import React from 'react';
import { shallow } from 'enzyme';
import Previous from '../Previous';

describe('Pager.Previous', () => {
  it('renders button', () => {
    const wrapper = shallow(<Previous />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    const wrapper = shallow(<Previous disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Previous onClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
