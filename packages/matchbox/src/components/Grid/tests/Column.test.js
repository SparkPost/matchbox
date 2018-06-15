import React from 'react';
import Column from '../Column';
import { shallow } from 'enzyme';

describe('Column', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Column><p>Grid</p></Column>);
  });

  it('renders with default props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with sizing prop', () => {
    wrapper.setProps({ xs: 12, sm: 6, md: 6, lg: 4, xl: 2, xsOffset: 1, smOffset: 2, mdOffset: 2, lgOffset: 3, xlOffset: 4 });
    expect(wrapper).toMatchSnapshot();
  });
});
