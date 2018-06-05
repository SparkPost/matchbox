import React from 'react';
import { shallow } from 'enzyme';

import Tabs from '../Tabs';

describe('Tabs', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      selected: 0,
      tabs: [
        { content: 'Example One' },
        { content: 'Example Two' },
        { content: 'Example Three' }
      ]
    };
    wrapper = shallow(<Tabs {...props} />);
  });

  it('should render tabs', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render container with no tabs', () => {
    wrapper.setProps({ tabs: []});
    expect(wrapper).toMatchSnapshot();
  });
});
