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
    wrapper.setProps({ xs: 12, md: 6, lg: 4 });
    expect(wrapper).toMatchSnapshot();
  });
});
