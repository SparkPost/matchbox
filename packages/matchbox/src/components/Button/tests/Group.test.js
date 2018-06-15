import React from 'react';
import Group from '../Group';
import { shallow } from 'enzyme';

describe('Group', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Group><button>Button 1</button><button>Button 2</button></Group>);
  });

  it('renders children correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets classname if passed', () => {
    wrapper.setProps({ className: 'group-of-buttons' });
    expect(wrapper).toMatchSnapshot();
  });
});
