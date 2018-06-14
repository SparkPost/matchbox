import React from 'react';
import Grid from '../Grid';
import { shallow } from 'enzyme';

describe('Grid', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Grid><p>Grid</p></Grid>);
  });

  it('renders with default props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
