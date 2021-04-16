import React from 'react';
import cases from 'jest-in-case';
import Skeleton, { Animator } from '../Skeleton';
import { render } from 'test-utils';

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

    it('should render with data-id', () => {
      const { getByTestId } = render(<Skeleton.Header data-id="test-id" />);
      expect(getByTestId('test-id')).toBeTruthy();
    });

    it('should not render children', () => {
      const { queryByText } = render(<Skeleton.Header>test</Skeleton.Header>);
      expect(queryByText('test')).toBeFalsy();
    });
  });

  describe('Base Skeleton', () => {
    it('should render with box system props', () => {
      const wrapper = Box({ size: '20px' });
      expect(wrapper.find('div').at(1)).toHaveStyleRule('width', '20px');
      expect(wrapper.find('div').at(1)).toHaveStyleRule('height', '20px');
    });

    it('should render with data-id', () => {
      const { getByTestId } = render(<Skeleton.Box data-id="test-id" />);
      expect(getByTestId('test-id')).toBeTruthy();
    });

    it('should not render children', () => {
      const { queryByText } = render(<Skeleton.Box>test</Skeleton.Box>);
      expect(queryByText('test')).toBeFalsy();
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

    it('should render with data-id', () => {
      const { getByTestId } = render(<Skeleton.Body data-id="test-id" />);
      expect(getByTestId('test-id')).toBeTruthy();
    });

    it('should not render children', () => {
      const { queryByText } = render(<Skeleton.Body>test</Skeleton.Body>);
      expect(queryByText('test')).toBeFalsy();
    });
  });
});
