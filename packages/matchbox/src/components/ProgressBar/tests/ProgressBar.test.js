import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProgressBar />);
  });

  it('renders progressbar at defaults', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders at 50% progress in navy color', () => {
    wrapper.setProps({ completed: 50, color: 'navy' });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders at 100% progress if given a value over 100', () => {
    wrapper.setProps({ completed: 200 });
    expect(wrapper.find('.Progress').props().style.width).toEqual('100%');
  });
});
