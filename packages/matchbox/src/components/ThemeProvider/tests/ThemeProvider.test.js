import React from 'react';
import { shallow } from 'enzyme';

import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  const subject = props => shallow(<ThemeProvider {...props} />);

  it('should be able to modify the theme', () => {
    const wrapper = subject({ theme: { testKey: 'testValue' } }).find('ThemeProvider');
    expect(wrapper.prop('theme').testKey).toEqual('testValue');
  });
});
