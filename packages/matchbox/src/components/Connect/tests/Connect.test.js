import React from 'react';
import Connect from '../Connect';
import { shallow } from 'enzyme';

describe('Connect', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      left: <button>Button on Left</button>,
      right: <button>Button on Right</button>

    };

    wrapper = shallow(<Connect {...props}><input type="text" /></Connect>);
  });

  it('renders correctly with connected components on left & right', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with connected components on left', () => {
    wrapper.setProps({ right: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with connected components on right', () => {
    wrapper.setProps({ left: null });
    expect(wrapper).toMatchSnapshot();
  });

});
