import React from 'react';
import { shallow } from 'enzyme';

import Tab from '../Tab';

describe('Tab', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      content: 'Example',
      index: 99
    };
    wrapper = shallow(<Tab {...props} />);
  });

  it('should render a tab', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return index to click handler', () => {
    const fakeEvent = Symbol;
    const onClick = jest.fn();

    wrapper.setProps({ onClick });
    wrapper.simulate('click', fakeEvent);

    expect(onClick).toHaveBeenCalledWith(fakeEvent, 99);
  });
});
