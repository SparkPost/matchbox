import React from 'react';
import 'jest-styled-components';

import { tokens } from '@sparkpost/design-tokens';
import Spinner from '../Spinner';

describe('Spinner', () => {
  const subject = props => global.mountStyled(<Spinner label="label" {...props} />);

  it('renders default styles', () => {
    const wrapper = subject();

    expect(wrapper.find('svg')).toHaveStyleRule('height', '28px');
    expect(wrapper.find('svg')).toHaveStyleRule('width', '28px');
    expect(wrapper.find('svg')).toHaveStyleRule('fill', 'none');
    expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_blue_700);
  });

  describe('renders colors', () => {
    it('blue', () => {
      const wrapper = subject({ color: 'blue' });

      expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_blue_700);
    });

    it('orange', () => {
      const wrapper = subject({ color: 'orange' });

      expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_brand_orange);
    });

    it('gray', () => {
      const wrapper = subject({ color: 'gray' });

      expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_gray_800);
    });

    it('white', () => {
      const wrapper = subject({ color: 'white' });

      expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_white);
    });
  });

  describe('renders sizing', () => {
    it('small', () => {
      const smallWrapper = subject({ size: 'small' });

      expect(smallWrapper.find('svg')).toHaveStyleRule('width', '20px');
      expect(smallWrapper.find('svg')).toHaveStyleRule('height', '20px');
      expect(smallWrapper.find('circle')).toHaveStyleRule('stroke-width', '2px');
    });

    it('medium', () => {
      const mediumWrapper = subject({ size: 'medium' });

      expect(mediumWrapper.find('svg')).toHaveStyleRule('width', '28px');
      expect(mediumWrapper.find('svg')).toHaveStyleRule('height', '28px');
      expect(mediumWrapper.find('circle')).toHaveStyleRule('stroke-width', '3px');
    });

    it('large', () => {
      const largeWrapper = subject({ size: 'large' });

      expect(largeWrapper.find('svg')).toHaveStyleRule('width', '60px');
      expect(largeWrapper.find('svg')).toHaveStyleRule('height', '60px');
      expect(largeWrapper.find('circle')).toHaveStyleRule('stroke-width', '4px');
    });
  });

  describe('renders with rotation only', () => {
    it('small', () => {
      const smallWrapper = subject({ size: 'small', rotationOnly: true });
      expect(smallWrapper.find('circle')).toHaveStyleRule('stroke-dasharray', '35 50');
    });

    it('medium', () => {
      const mediumWrapp = subject({ size: 'medium', rotationOnly: true });
      expect(mediumWrapp.find('circle')).toHaveStyleRule('stroke-dasharray', '55 100');
    });

    it('large', () => {
      const largeWrapper = subject({ size: 'large', rotationOnly: true });
      expect(largeWrapper.find('circle')).toHaveStyleRule('stroke-width', '4px');
      expect(largeWrapper.find('circle')).toHaveStyleRule('stroke-dasharray', '110 200');
    });
  });

  it('renders hidden label', () => {
    const wrapper = subject({ label: 'The Label' });

    expect(wrapper.find('span').text()).toEqual('The Label');
  });
});
