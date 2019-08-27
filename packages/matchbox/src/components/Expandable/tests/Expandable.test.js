import React from 'react';
import Expandable from '../Expandable';
import { mount } from 'enzyme';

describe('Expandable component', () => {
  let onToggle;

  beforeEach(() => {
    onToggle = jest.fn();
  });

  const testOpen = (wrapper, open) => {
    expect(wrapper.find('.Header')).toHaveAttributeValue('aria-expanded', open ? 'true' : 'false');
    expect(wrapper.find('svg.Arrow')).toHaveAttributeValue('class', open ? 'Arrow Open' : 'Arrow');
    expect(wrapper.find('.ContentWrapper')).toHaveAttributeValue('class', open ? 'ContentWrapper Open' : 'ContentWrapper');
    expect(wrapper.find('.ContentWrapper')).toHaveAttributeValue('aria-hidden', open ? 'false' : 'true');
  };

  const subject = (props = {}) => mount(
    <Expandable title='test-title' id='test-id' {...props}/>
  );

  it('should render default state with title and id correctly', () => {
    expect(subject()).toMatchSnapshot();
  });

  it('should render provided default state with an icon', () => {
    expect(subject({
      icon: <svg>test</svg>,
      defaultOpen: true
    })).toMatchSnapshot();
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
      wrapper.find('.Header').simulate('click');
      testOpen(wrapper, true);
    });

    it('should toggle when hitting enter or space', () => {
      const wrapper = subject({ onToggle });
      wrapper.find('.Header').simulate('keyDown', { key: 'Enter', shiftKey: false });
      testOpen(wrapper, true);

      wrapper.find('.Header').simulate('keyDown', { key: ' ', shiftKey: false });
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
      wrapper.find('.Header').simulate('click');
      expect(onToggle).toHaveBeenCalled();
    });

    it('should handle toggle when hitting enter or space', () => {
      const wrapper = subject({ open: true, onToggle });
      wrapper.find('.Header').simulate('keyDown', { key: 'Enter', shiftKey: false });
      wrapper.find('.Header').simulate('keyDown', { key: ' ', shiftKey: false });
      expect(onToggle).toHaveBeenCalledTimes(2);
    });
  });
});
