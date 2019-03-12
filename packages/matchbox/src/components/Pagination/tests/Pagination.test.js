import React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../Pagination';

describe('Pagination', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      currentPage: 1,
      pages: 10,
      pageRange: 3,
      selectedColor: 'blue'
    };

    wrapper = shallow(<Pagination {...props}/>);
  });

  it('renders pagination', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('invokes onChange on page', () => {
    const fn = jest.fn();
    wrapper.setProps({ onChange: fn });
    wrapper.find('Button').at(0).simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  describe('invokes onChange when props change', () => {
    let fn;

    beforeEach(() => {
      fn = jest.fn();
      wrapper.setProps({ onChange: fn });
    });

    it('page', () => {
      wrapper.setProps({ pages: 11 });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('currentPage', () => {
      wrapper.setProps({ currentPage: 4 });
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('pageRange', () => {
      wrapper.setProps({ pageRange: 6 });
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  it('renders pagination with marginsHidden true', () => {
    wrapper.setProps({ marginsHidden: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders pagination with flat buttons', () => {
    wrapper.setProps({ flat: true });
    expect(wrapper).toMatchSnapshot();
  });
});
