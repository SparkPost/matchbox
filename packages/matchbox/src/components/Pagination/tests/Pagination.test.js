import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

import Pagination from '../Pagination';

describe('Pagination', () => {
  const props = {
    currentPage: 1,
    pages: 10,
    pageRange: 3,
    onChange: jest.fn(),
    mb: 400,
  };

  let wrapper = global.mountStyled(<Pagination {...props} />);

  it('renders styles', () => {
    expect(wrapper.find('div').at(0)).toHaveStyleRule('display', 'inline-flex');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('align-items', 'center');
  });

  it('renders system props (margin)', () => {
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });

  it('invokes onChange on page', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  describe('invokes onChange when props change', () => {
    it('page', () => {
      wrapper.setProps({ pages: 11 });
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('currentPage', () => {
      wrapper.setProps({ currentPage: 4 });
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('pageRange', () => {
      wrapper.setProps({ pageRange: 6 });
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
  });

  it('renders pagination with marginsHidden true', () => {
    expect(wrapper.find('svg').at(0)).toExist();
    wrapper = global.mountStyled(<Pagination {...props} marginsHidden={true} />);
    expect(wrapper.find('svg').at(0)).toEqual({});
  });
});
