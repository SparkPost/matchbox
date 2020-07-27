import React from 'react';
import { shallow } from 'enzyme';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

import Pagination from '../Pagination';

describe('Pagination', () => {
  const props = {
    currentPage: 1,
    pages: 10,
    marginsHidden: true,
    pageRange: 3,
    onChange: jest.fn(),
    mb: 400,
  };

  let wrapper = global.mountStyled(<Pagination {...props} />);
  let shallowWrapper = shallow(<Pagination {...props} />);

  it('renders styles', () => {
    expect(wrapper.find('div').at(1)).toHaveStyleRule('display', 'inline-flex');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('align-items', 'center');
  });

  it('renders system props (margin)', () => {
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });

  it('renders active page styles correctly', () => {
    expect(wrapper.find('button').at(1)).toHaveStyleRule('background', 'blue');
    expect(wrapper.find('button').at(1)).toHaveStyleRule('color', 'white');
  });

  it('invokes onChange on page', () => {
    wrapper
      .find('button')
      .at(3)
      .simulate('click');
    expect(props.onChange).toHaveBeenCalledWith(2);
  });

  describe('invokes onChange when props change', () => {
    it('page', () => {
      shallowWrapper.setProps({ pages: 11 });
      expect(props.onChange).toHaveBeenCalledWith(0);
    });

    it('currentPage', () => {
      shallowWrapper.setProps({ currentPage: 4 });
      expect(props.onChange).toHaveBeenCalledWith(2);
    });

    it('pageRange', () => {
      shallowWrapper.setProps({ pageRange: 6 });
      expect(props.onChange).toHaveBeenCalledWith(2);
    });
  });

  it('renders pagination with marginsHidden true', () => {
    expect(wrapper.find('svg').at(0)).toExist();
    wrapper = global.mountStyled(<Pagination {...props} marginsHidden={true} />);
    expect(wrapper.find('svg').at(0)).toEqual({});
  });
});
