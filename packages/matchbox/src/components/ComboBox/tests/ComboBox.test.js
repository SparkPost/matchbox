import React from 'react';
import ComboBox from '../ComboBox';
import { mount } from 'enzyme';

describe('ComboBox Wrapper', () => {
  const subject = (props = {}) => mount(<ComboBox {...props}/>);

  it('should render styles, children, and other props correctly', () => {
    expect(subject({
      children: <span>test children</span>,
      style: { background: 'red' },
      onClick: jest.fn()
    }).find('div')).toMatchSnapshot();
  });
});
