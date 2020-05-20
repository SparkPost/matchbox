import React from 'react';
import 'jest-styled-components';

import { tokens } from '@sparkpost/design-tokens';
import Spinner from '../Spinner';

describe('Spinner', () => {
  const subject = props => global.mountStyled(<Spinner label="label" {...props} />);

  it('renders default styles', () => {
    const wrapper = subject();

    expect(wrapper.find('svg')).toHaveStyleRule('height', '60px');
    expect(wrapper.find('svg')).toHaveStyleRule('width', '60px');
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

      expect(wrapper.find('circle')).toHaveStyleRule('stroke', tokens.color_brand_gray);
    });
  });

  describe('renders sizing', () => {
    it('small', () => {
      const smallWrapper = subject({ size: 'small' });

      expect(smallWrapper.find('svg')).toHaveStyleRule('width', '28px');
      expect(smallWrapper.find('svg')).toHaveStyleRule('height', '28px');
      expect(smallWrapper.find('circle')).toHaveStyleRule('stroke-width', '3px');
      expect(smallWrapper.find('circle')).toHaveStyleRule('stroke-dasharray', '100 100');
    });

    it('large', () => {
      const largeWrapper = subject({ size: 'large' });

      expect(largeWrapper.find('svg')).toHaveStyleRule('width', '60px');
      expect(largeWrapper.find('svg')).toHaveStyleRule('height', '60px');
      expect(largeWrapper.find('circle')).toHaveStyleRule('stroke-width', '4px');
      expect(largeWrapper.find('circle')).toHaveStyleRule('stroke-dasharray', '150 200');
    });
  });

  it('renders hidden label', () => {
    const wrapper = subject({ label: 'The Label' });

    expect(wrapper.find('span').text()).toEqual('The Label');
  });
});
