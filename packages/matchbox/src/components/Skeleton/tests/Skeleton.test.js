import React from 'react';
import 'jest-styled-components';
import cases from 'jest-in-case';
import Skeleton, { Animator } from '../Skeleton';

describe('Skeleton', () => {
  const Header = props => global.mountStyled(<Skeleton.Header {...props} />);
  const Body = props => global.mountStyled(<Skeleton.Body {...props} />);
  const Box = props => global.mountStyled(<Skeleton.Box {...props} />);

  const sizes = [
    ['h1', '3.5rem'],
    ['h2', '2.5rem'],
    ['h3', '2rem'],
    ['h4', '1.750rem'],
    ['h5', '1.5rem'],
    ['h6', '1.25rem'],
  ];

  describe('Header', () => {
    it('should render with defaults', () => {
      const wrapper = Header();
      expect(wrapper.find('div').at(1)).toHaveStyleRule('max-width', '900');
      expect(wrapper.find('div').at(1)).toHaveStyleRule('height', '2rem');
    });

    it('should render a width and looks like', () => {
      const wrapper = Header({ width: '500px', looksLike: 'h1' });
      expect(wrapper.find('div').at(1)).toHaveStyleRule('max-width', '500px');
      expect(wrapper.find('div').at(1)).toHaveStyleRule('height', '3.5rem');
    });

    cases(
      'should look like headers',
      ([looksLike, size]) => {
        const wrapper = Header({ looksLike });
        expect(wrapper.find('div').at(1)).toHaveStyleRule('height', size);
      },
      sizes,
    );
  });

  describe('Base Skeleton', () => {
    it('should render with box system props', () => {
      const wrapper = Box({ size: '20px' });
      expect(wrapper.find('div').at(1)).toHaveStyleRule('width', '20px');
      expect(wrapper.find('div').at(1)).toHaveStyleRule('height', '20px');
    });
  });

  describe('Body', () => {
    it('should render with defaults', () => {
      const wrapper = Body();
      expect(wrapper.find(Animator)).toHaveLength(3);
    });

    it('should render with lines', () => {
      const wrapper = Body({ lines: 5 });
      expect(wrapper.find(Animator)).toHaveLength(5);
      expect(wrapper.find(Animator).last()).toHaveStyleRule('width', '70%');
    });
  });
});
