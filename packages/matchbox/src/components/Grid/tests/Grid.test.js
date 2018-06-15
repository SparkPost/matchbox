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

  it('renders other props', () => {
    wrapper.setProps({
      center: 'xs',
      start: 'xs',
      end: 'xs',
      top: 'xs',
      middle: 'xs',
      bottom: 'xs',
      around: 'xs',
      between: 'xs'
    });
    expect(wrapper).toMatchSnapshot();
  });
});
