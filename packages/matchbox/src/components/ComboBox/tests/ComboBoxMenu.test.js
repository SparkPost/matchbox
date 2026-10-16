import React from 'react';
import { render } from 'test-utils';
import ComboBoxMenu from '../ComboBoxMenu';

describe('ComboBoxMenu', () => {
  const subject = (props = {}) => render(<ComboBoxMenu {...props} />).container;
  const items = [
    { content: 'foo', is: 'button' },
    { content: <div>bar</div>, is: 'link' },
  ];

  it('should render and open menu with items correctly', () => {
    const wrapper = subject({ items, isOpen: true });
    expect(wrapper.querySelector('button').textContent).toEqual('foo');
    expect(wrapper.querySelector('a').textContent).toEqual('bar');
    expect(wrapper.querySelector('[data-id="popover-content"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[role="menu"]')).toHaveStyleRule('max-height', '20rem');
  });

  it('should not render and closed menu', () => {
    const wrapper = subject({ items, isOpen: false });
    expect(wrapper.querySelector('button')).not.toBeInTheDocument();
    expect(wrapper.querySelector('a')).not.toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="popover-content"]')).not.toBeInTheDocument();
  });

  it('should render an open empty list correctly', () => {
    const wrapper = subject({ items: [], isOpen: true, emptyMessage: 'test message' });
    expect(wrapper.querySelector('[data-id="popover-content"]').textContent).toEqual(
      'test message',
    );
  });
});
