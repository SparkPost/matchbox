import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';

describe('Table', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      title: 'Sample Table',
      accent: true,
      data: [['A', 'B', 'C'], [1, 2, 3]]
    };

    wrapper = shallow(<Table {...props}/>);
  });

  it('renders Table', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
