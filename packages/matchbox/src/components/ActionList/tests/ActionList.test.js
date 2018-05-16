import React from 'react';
import ActionList from '../ActionList';
import { shallow } from 'enzyme';

describe('ActionList', () => {
  const props = {
    actions: [{ content: 'action label' }, { content: 'action label 2', selected: true }]
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ActionList {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Section').dive()).toMatchSnapshot();
  });

});
