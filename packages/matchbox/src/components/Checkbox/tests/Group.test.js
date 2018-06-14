import React from 'react';
import Group from '../Group';
import { shallow } from 'enzyme';

describe('Checkbox Group', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      label: 'Checkbox Label'
    };

    wrapper = shallow(<Group {...props}><span>Checkbox Child</span></Group>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly on required', () => {
    wrapper.setProps({ required: true });
    expect(wrapper).toMatchSnapshot();
  });

});

