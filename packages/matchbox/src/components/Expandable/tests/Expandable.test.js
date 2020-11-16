import React from 'react';
import Expandable from '../Expandable';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Expandable component', () => {
  let onToggle;

  beforeEach(() => {
    onToggle = jest.fn();
  });

  const testOpen = (wrapper, open) => {
    expect(wrapper.find(Expandable.Header)).toHaveAttributeValue(
      'aria-expanded',
      open ? 'true' : 'false',
    );
    expect(wrapper.find(Expandable.Arrow)).toHaveStyleRule(
      'transform',
      open ? 'rotate(90deg)' : 'rotate(-90deg)',
    );
    expect(wrapper.find(Expandable.ContentWrapper)).toHaveStyleRule(
      'visibility',
      open ? 'visible' : 'hidden',
    );
    expect(wrapper.find(Expandable.ContentWrapper)).toHaveStyleRule(
      'display',
      open ? 'flex' : 'none',
    );
    expect(wrapper.find(Expandable.ContentWrapper)).toHaveAttributeValue(
      'aria-hidden',
      open ? 'false' : 'true',
    );
  };

  const subject = (props = {}) =>
    global.mountStyled(<Expandable title="test-title" id="test-id" {...props} />);

  it('should render default state with title and id correctly', () => {
    const wrapper = subject();
    expect(wrapper.find(Expandable.Title).text()).toEqual('test-title');
    expect(wrapper.find(Expandable.ContentWrapper)).toHaveAttributeValue('id', 'test-id');
  });

  it('should render provided default state with an icon', () => {
    const wrapper = subject({
      icon: <svg>test</svg>,
      defaultOpen: true,
    });
    expect(wrapper.find(Expandable.Icon).text()).toEqual('test');
  });

  it('should render borderless padding', () => {
    const wrapper = subject({
      variant: 'borderless',
      defaultOpen: true,
    });

    expect(wrapper.find(Expandable.ContentWrapper)).toHaveStyleRule('padding-left', '1rem');
    expect(wrapper.find(Expandable.Header)).toHaveStyleRule('padding', '1rem');
  });

  describe('uncontrolled', () => {
    it('should use default defaultOpen on first render', () => {
      const wrapper = subject();
      testOpen(wrapper, false);
    });

    it('should use defaultOpen on first render', () => {
      const wrapper = subject({ defaultOpen: true });
      testOpen(wrapper, true);
    });

    it('should toggle open when clicking on header', () => {
      const wrapper = subject();
      wrapper.find(Expandable.Header).simulate('click');
      testOpen(wrapper, true);
    });

    it('should toggle when hitting enter or space', () => {
      const wrapper = subject({ onToggle });
      wrapper.find(Expandable.Header).simulate('keyDown', { key: 'Enter', shiftKey: false });
      testOpen(wrapper, true);

      wrapper.find(Expandable.Header).simulate('keyDown', { key: ' ', shiftKey: false });
      testOpen(wrapper, false);
    });
  });

  describe('controlled', () => {
    it('should toggle open when passed open state', () => {
      const wrapper = subject({ open: true, onToggle });
      testOpen(wrapper, true);
    });

    it('should handle toggle when clicking on header', () => {
      const wrapper = subject({ open: true, onToggle });
      wrapper.find(Expandable.Header).simulate('click');
      expect(onToggle).toHaveBeenCalled();
    });

    it('should handle toggle when hitting enter or space', () => {
      const wrapper = subject({ open: true, onToggle });
      wrapper.find(Expandable.Header).simulate('keyDown', { key: 'Enter', shiftKey: false });
      wrapper.find(Expandable.Header).simulate('keyDown', { key: ' ', shiftKey: false });
      expect(onToggle).toHaveBeenCalledTimes(2);
    });
  });

  describe('accents', () => {
    it('renders accent colors', () => {
      let defaultWrapper = subject({ accent: true });
      let orangeWrapper = subject({ accent: 'orange' });
      let greenWrapper = subject({ accent: 'green' });
      let yellowWrapper = subject({ accent: 'yellow' });
      let redWrapper = subject({ accent: 'red' });
      let grayWrapper = subject({ accent: 'gray' });
      let blueWrapper = subject({ accent: 'blue' });
      let purpleWrapper = subject({ accent: 'purple' });

      expect(defaultWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
      expect(orangeWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_brand_orange,
      );
      expect(greenWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_green_700,
      );
      expect(yellowWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_yellow_400,
      );
      expect(redWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_red_700,
      );
      expect(grayWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_gray_600,
      );
      expect(blueWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
      expect(purpleWrapper.find(Expandable.Accent)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
    });
  });
});
