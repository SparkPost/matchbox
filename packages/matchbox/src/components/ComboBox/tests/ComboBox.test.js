import React from 'react';
import ComboBox from '../ComboBox';
import ComboBoxMenu from '../ComboBoxMenu';
import ComboBoxTextField from '../ComboBoxTextField';
import 'jest-styled-components';

describe('ComboBox Wrapper', () => {
  const subject = (props = {}) =>
    global.mountStyled(
      <ComboBox {...props}>
        <ComboBoxTextField id="test-id" helpText="test help" />
        <ComboBoxMenu isOpen items={[{ content: 'foo', is: 'button' }]} />
      </ComboBox>,
    );

  it('should menu correctly inside textfield', () => {
    const wrapper = subject();
    const children = wrapper
      .find('div')
      .at(1)
      .children();
    expect(children.at(1).find('input')).toExist();
    expect(children.at(2).text()).toEqual('foo');
    expect(children.last().text()).toEqual('test help');
  });
});
