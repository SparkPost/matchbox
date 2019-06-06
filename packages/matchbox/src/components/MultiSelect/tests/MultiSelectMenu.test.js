import React from 'react';
import MultiSelectMenu from '../MultiSelectMenu';
import { mount } from 'enzyme';

describe('MultiSelectMenu', () => {
  const subject = (props = {}) => mount(<MultiSelectMenu {...props}/>);
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
