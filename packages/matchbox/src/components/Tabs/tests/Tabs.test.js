import React from 'react';
import { shallow } from 'enzyme';

import Tabs from '../Tabs';

describe('Tabs', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      tabs: [
        { content: 'Tab 1', onClick: jest.fn() },
        { content: 'Tab 2', onClick: jest.fn() }
      ],
      selected: 0,
      connectBelow: false
    };

    wrapper = shallow(<Tabs {...props}/>);
  });

  it('renders with first tab selected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with fitted tabs', () => {
    wrapper.setProps({ fitted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('changes selected tab on click', () => {
    wrapper.find('Tab').at(1).simulate('click');
    expect(props.tabs[1].onClick).toHaveBeenCalledTimes(1);
  });
});
