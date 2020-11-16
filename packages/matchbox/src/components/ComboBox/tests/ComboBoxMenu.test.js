import React from 'react';
import ComboBoxMenu from '../ComboBoxMenu';

describe('ComboBoxMenu', () => {
  const subject = (props = {}) => global.mountStyled(<ComboBoxMenu {...props} />);
  const items = [
    { content: 'foo', is: 'button' },
    { content: <div>bar</div>, is: 'link' },
  ];

  it('should render and open menu with items correctly', () => {
    const wrapper = subject({ items, isOpen: true });
    expect(wrapper.find('button').text()).toEqual('foo');
    expect(wrapper.find('a').text()).toEqual('bar');
    expect(wrapper.find('[data-id="popover-content"]')).toExist();
    expect(wrapper.find('div').at(4)).toHaveStyleRule('max-height', '20rem');
  });

  it('should not render and closed menu', () => {
    const wrapper = subject({ items, isOpen: false });
    expect(wrapper.find('button')).not.toExist();
    expect(wrapper.find('a')).not.toExist();
    expect(wrapper.find('[data-id="popover-content"]')).not.toExist();
  });

  it('should render an open empty list correctly', () => {
    const wrapper = subject({ items: [], isOpen: true, emptyMessage: 'test message' });
    expect(
      wrapper
        .find('[data-id="popover-content"]')
        .first()
        .text(),
    ).toEqual('test message');
  });
});
