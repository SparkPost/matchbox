import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  const subject = props =>
    mount(
      <ThemeProvider {...props}>
        <div id="test" />
      </ThemeProvider>,
    );

  it('should be able to modify the theme', () => {
    const wrapper = subject({ theme: { testKey: 'testValue' } });
    expect(wrapper.find('#test')).toExist();
    expect(wrapper.find(ThemeProvider).prop('theme').testKey).toEqual('testValue');
  });
});
