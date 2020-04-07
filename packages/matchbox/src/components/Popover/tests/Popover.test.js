import React from 'react';
import Popover from '../Popover';
import 'jest-styled-components';
import * as geometryHelpers from '../../../helpers/geometry';

describe('Popover', () => {
  const subject = props =>
    global.mountStyled(<Popover trigger={<button>trigger</button>} {...props} />);

  describe('overlay and display', () => {
    it('should render its wrapper as a span', () => {
      const wrapper = subject();
      expect(wrapper.find('span').at(0)).toHaveStyleRule('display', 'inline-block');
      expect(wrapper.find('span').at(1)).toHaveStyleRule('display', 'inline-block');
    });

    it('should render its wrapper as a div', () => {
      const wrapper = subject({ as: 'div' });
      expect(wrapper.find('div').at(0)).not.toHaveStyleRule('display');
      expect(wrapper.find('div').at(1)).not.toHaveStyleRule('display');
    });

    it('should position correctly', () => {
      const wrapper = subject();
      expect(wrapper.find('div')).toHaveStyleRule('width', '0px');
      expect(wrapper.find('div')).toHaveStyleRule('height', '0px');
    });

    it('should handle measurement on open', () => {
      geometryHelpers.getPositionFor = jest.fn(() => ({}));
      const wrapper = subject();
      wrapper.find('button').simulate('click');
      expect(geometryHelpers.getPositionFor).toHaveBeenCalledTimes(3);
    });
  });

  describe('popover toggling', () => {
    it('should handle uncontrolled toggle on trigger click', () => {
      const wrapper = subject();
      expect(wrapper.find('div')).toHaveAttributeValue('aria-hidden', 'true');
      expect(wrapper.find('[data-id="popover-content"]')).not.toExist();
      wrapper.find('button').simulate('click');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('opacity', '1');
      expect(wrapper.find('div').at(0)).not.toHaveAttributeValue('aria-hidden');
      wrapper.find('button').simulate('click');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('opacity', '0');
      expect(wrapper.find('div').at(0)).toHaveAttributeValue('aria-hidden', 'true');
    });

    it('should not open a controlled popover', () => {
      const wrapper = subject({ open: false });
      wrapper.find('button').simulate('click');
      expect(wrapper.find('[data-id="popover-content"]')).not.toExist();
    });

    it('should render an opened controlled popover', () => {
      const wrapper = subject({ open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('opacity', '1');
    });
  });

  describe('content', () => {
    it('should render deprecated sectioned prop', () => {
      const wrapper = subject({ sectioned: true, open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('padding', '1rem');
    });

    it('should render custom padding', () => {
      const wrapper = subject({ p: '500', open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('padding', '1.5rem');
    });

    it('should render custom width', () => {
      const wrapper = subject({ width: '100px', minWidth: '50px', open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('width', '100px');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('min-width', '50px');
    });

    it('should render default position', () => {
      const wrapper = subject({ open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('top', '100%');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('bottom', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('left', '0');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('right', 'auto');
    });

    it('should render bottom left position', () => {
      const wrapper = subject({ left: true, open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('top', '100%');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('bottom', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('left', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('right', '0');
    });

    it('should render top right position', () => {
      const wrapper = subject({ top: true, open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('bottom', '100%');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('top', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('left', '0');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('right', 'auto');
    });

    it('should render top left position', () => {
      const wrapper = subject({ top: true, left: true, open: true });
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('bottom', '100%');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('top', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('left', 'auto');
      expect(wrapper.find('[data-id="popover-content"]')).toHaveStyleRule('right', '0');
    });

    it('should render a classname', () => {
      const wrapper = subject({ className: 'test-class', open: true });
      expect(wrapper.find('.test-class')).toExist();
    });

    it('should render content', () => {
      const wrapper = subject({ children: 'test content', open: true });
      expect(
        wrapper
          .find('[data-id="popover-content"]')
          .first() // React transition group duplicates content
          .text(),
      ).toEqual('test content');
    });
  });
});
