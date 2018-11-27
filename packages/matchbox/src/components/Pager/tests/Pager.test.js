import React from 'react';
import { shallow } from 'enzyme';
import Pager from '../Pager';

describe('Pager', () => {
  it('renders pager with buttons', () => {
    const wrapper = shallow(
      <Pager>
        <Pager.Previous />
        <Pager.Next />
      </Pager>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
