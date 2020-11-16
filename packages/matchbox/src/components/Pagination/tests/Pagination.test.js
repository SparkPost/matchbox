import React from 'react';
import { shallow } from 'enzyme';
import { tokens } from '@sparkpost/design-tokens';
import Pagination from '../Pagination';

global.matchMedia = function() {
  return {
    matches: true,
    media: '(max-width: 1080px)',
    onChange: jest.fn(),
    addListener: jest.fn(),
  };
};

describe('Pagination', () => {
  const props = {
    currentPage: 1,
    pages: 10,
    marginsHidden: true,
    pageRange: 3,
    onChange: jest.fn(),
    mb: 400,
  };
  const subject = () => global.mountStyled(<Pagination {...props} />);
  const shallowSubject = () => shallow(<Pagination {...props} />);

  it('renders styles', () => {
    expect(
      subject()
        .find('div')
        .at(1),
    ).toHaveStyleRule('display', 'inline-flex');
    expect(
      subject()
        .find('div')
        .at(1),
    ).toHaveStyleRule('align-items', 'center');
  });

  it('renders system props (margin)', () => {
    expect(
      subject()
        .find('div')
        .at(0),
    ).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });

  it('renders active page styles correctly', () => {
    expect(
      subject()
        .find('button')
        .at(1),
    ).toHaveStyleRule('background', 'blue');
    expect(
      subject()
        .find('button')
        .at(1),
    ).toHaveStyleRule('color', 'white');
  });

  it('invokes onChange on page', () => {
    subject()
      .find('button')
      .at(3)
      .simulate('click');
    expect(props.onChange).toHaveBeenCalledWith(2);
  });

  describe('invokes onChange when props change', () => {
    it('page', () => {
      shallowSubject().setProps({ pages: 11 });
      expect(props.onChange).toHaveBeenCalledWith(0);
    });

    it('currentPage', () => {
      shallowSubject().setProps({ currentPage: 4 });
      expect(props.onChange).toHaveBeenCalledWith(2);
    });

    it('pageRange', () => {
      shallowSubject().setProps({ pageRange: 6 });
      expect(props.onChange).toHaveBeenCalledWith(2);
    });
  });

  it('renders pagination with marginsHidden true', () => {
    expect(
      subject()
        .find('svg')
        .at(0),
    ).toExist();
    expect(
      global
        .mountStyled(<Pagination {...props} marginsHidden={true} />)
        .find('svg')
        .at(0),
    ).toEqual({});
  });
});
