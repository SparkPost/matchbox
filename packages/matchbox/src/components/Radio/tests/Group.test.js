import React from 'react';
import Radio from '../Radio';
import { shallow } from 'enzyme';

describe('Group', () => {

  it('renders children correctly', () => {
    expect(shallow(<Radio.Group>children</Radio.Group>)).toMatchSnapshot();
  });

  it('sets label and required', () => {
    expect(shallow(<Radio.Group label='label' required>children</Radio.Group>)).toMatchSnapshot();
  });
});
