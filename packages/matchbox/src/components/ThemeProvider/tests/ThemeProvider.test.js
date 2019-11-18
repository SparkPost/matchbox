import React from 'react';
import { shallow } from 'enzyme';

import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  const subject = (props) => shallow(<ThemeProvider {...props} />);

  it('should use a provided theme', () => {
    // Theme mocked in global helpers.js
    expect(subject().prop('theme')).toMatchSnapshot();
  });

  it('should be able to modify the theme', () => {
    expect(subject({ theme: { testKey: 'testValue' }}).prop('theme').testKey).toEqual('testValue');
  });
});
