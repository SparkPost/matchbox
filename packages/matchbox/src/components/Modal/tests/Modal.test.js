import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../Modal';

describe('Modal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onClose: jest.fn()
    };

    wrapper = shallow(<Modal {...props}><h1>Test Example</h1></Modal>);
  });

  it('should render modal', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render modal with close button', () => {
    wrapper.setProps({ showCloseButton: true });
    expect(wrapper).toMatchSnapshot();
  });
});
