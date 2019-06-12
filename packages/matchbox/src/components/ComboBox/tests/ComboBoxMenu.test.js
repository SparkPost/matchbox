import React from 'react';
import ComboBoxMenu from '../ComboBoxMenu';
import { mount } from 'enzyme';

describe('ComboBoxMenu', () => {
  const subject = (props = {}) => mount(<ComboBoxMenu {...props}/>);
  const items = [
    { content: 'foo' },
    { content: <div>bar</div> }
  ];

  it('should render items correctly', () => {
    expect(subject({ items })).toMatchSnapshot();
  });

  it('should render correctly when open', () => {
    const menu = subject({ items, isOpen: true });
    expect(menu.find('.List')).toHaveAttributeValue('class', 'List open');
  });
});
