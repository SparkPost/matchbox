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
      connectBelow: false,
      onSelect: jest.fn()
    };

    wrapper = shallow(<Tabs {...props}/>);
  });

  it('renders with first tab selected', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Tab').at(0).dive()).toMatchSnapshot();
    expect(wrapper.find('Tab').at(1).dive()).toMatchSnapshot();
  });

  it('renders with fitted tabs', () => {
    wrapper.setProps({ fitted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when connected with below components', () => {
    wrapper.setProps({ connectBelow: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('changes selected tab on click', () => {
    const event = {};
    wrapper.find('Tab').at(1).simulate('click', event, 1);
    expect(props.tabs[1].onClick).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(1, 0);
  });
});
