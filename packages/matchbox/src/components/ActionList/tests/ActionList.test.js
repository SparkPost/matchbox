import React from 'react';
import ActionList from '../ActionList';
import { shallow } from 'enzyme';

describe('ActionList', () => {

  it('render correctly', () => {
    expect(shallow(<ActionList />)).toMatchSnapshot();
  });

});