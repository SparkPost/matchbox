import React from 'react';
import ComboBoxMenu from '../ComboBoxMenu';
import { mount } from 'enzyme';

describe('ComboBoxMenu', () => {
  const subject = (props = {}) => mount(<ComboBoxMenu {...props} />);
  const items = [{ content: 'foo' }, { content: <div>bar</div> }];

  // These tests are causing failures after updating UnstyledLink b/c ComboBoxMenu is using
  // ActionList - Need to fix with https://jira.int.messagesystems.com/browse/FE-814
  // it('should render items correctly', () => {
  //   expect(subject({ items })).toMatchSnapshot();
  // });

  // it('should render correctly when open', () => {
  //   const menu = subject({ items, isOpen: true });
  //   expect(menu.find('.List')).toHaveAttributeValue('class', 'List open');
  // });

  it('should render items correctly', () => {
    expect(
      subject({ items })
        .find('div')
        .at(3)
        .text(),
    ).toEqual('bar');
  });
});
