import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../Tag';

describe('Tag', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      color: 'red'
    };

    wrapper = shallow(<Tag {...props}><span>Tag 1</span></Tag>);
  });

  it('renders without close button', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with close button', () => {
    const fn = jest.fn();
    wrapper.setProps({ onRemove: fn, color: 'purple' });
    expect(wrapper).toMatchSnapshot();
    wrapper.find('UnstyledLink').simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });


});
