import React from 'react';
import { render, fireEvent } from 'test-utils';
import Expandable from '../Expandable';
import { tokens } from '@sparkpost/design-tokens';

describe('Expandable component', () => {
  let onToggle;

  beforeEach(() => {
    onToggle = jest.fn();
  });

  const testOpen = (wrapper, open) => {
    expect(wrapper.querySelector(`${Expandable.Header}`)).toHaveAttributeValue(
      'aria-expanded',
      open ? 'true' : 'false',
    );
    expect(wrapper.querySelector(`${Expandable.Arrow}`)).toHaveStyleRule(
      'transform',
      open ? 'rotate(90deg)' : 'rotate(-90deg)',
    );
    expect(wrapper.querySelector(`${Expandable.ContentWrapper}`)).toHaveStyleRule(
      'visibility',
      open ? 'visible' : 'hidden',
    );
    expect(wrapper.querySelector(`${Expandable.ContentWrapper}`)).toHaveStyleRule(
      'display',
      open ? 'flex' : 'none',
    );
    expect(wrapper.querySelector(`${Expandable.ContentWrapper}`)).toHaveAttributeValue(
      'aria-hidden',
      open ? 'false' : 'true',
    );
  };

  const accent = (wrapper) => wrapper.firstChild.firstChild;

  const subject = (props = {}) =>
    render(<Expandable title="test-title" id="test-id" {...props} />).container;

  it('should render default state with title and id correctly', () => {
    const wrapper = subject();
    expect(wrapper.querySelector(`${Expandable.Title}`).textContent).toEqual('test-title');
    expect(wrapper.querySelector(`${Expandable.ContentWrapper}`)).toHaveAttributeValue('id', 'test-id');
  });

  it('should render provided default state with an icon', () => {
    const wrapper = subject({
      icon: <svg>test</svg>,
      defaultOpen: true,
    });
    expect(wrapper.querySelector('svg').textContent).toEqual('test');
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
      fireEvent.click(wrapper.querySelector(`${Expandable.Header}`));
      testOpen(wrapper, true);
    });

    it('should toggle when hitting enter or space', () => {
      const wrapper = subject({ onToggle });
      fireEvent.keyDown(wrapper.querySelector(`${Expandable.Header}`), { key: 'Enter', shiftKey: false });
      testOpen(wrapper, true);

      fireEvent.keyDown(wrapper.querySelector(`${Expandable.Header}`), { key: ' ', shiftKey: false });
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
      fireEvent.click(wrapper.querySelector(`${Expandable.Header}`));
      expect(onToggle).toHaveBeenCalled();
    });

    it('should handle toggle when hitting enter or space', () => {
      const wrapper = subject({ open: true, onToggle });
      fireEvent.keyDown(wrapper.querySelector(`${Expandable.Header}`), { key: 'Enter', shiftKey: false });
      fireEvent.keyDown(wrapper.querySelector(`${Expandable.Header}`), { key: ' ', shiftKey: false });
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

      expect(accent(defaultWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
      expect(accent(orangeWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_brand_orange,
      );
      expect(accent(greenWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_green_700,
      );
      expect(accent(yellowWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_yellow_400,
      );
      expect(accent(redWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_red_700,
      );
      expect(accent(grayWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_gray_600,
      );
      expect(accent(blueWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
      expect(accent(purpleWrapper)).toHaveStyleRule(
        'background-color',
        tokens.color_blue_700,
      );
    });
  });
});
