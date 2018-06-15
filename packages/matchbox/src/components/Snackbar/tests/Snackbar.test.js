import React from 'react';
import { shallow } from 'enzyme';

import Snackbar from '../Snackbar';
import styles from '../Snackbar.module.scss';

describe('Snackbar', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      status: 'default',
      maxWidth: 500,
      onDismiss: jest.fn()
    };
    wrapper = shallow(<Snackbar {...props}>Snacksssss</Snackbar>);
  });

  it('renders Snackbar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Snackbar with different props', () => {
    wrapper.setProps({ maxWidth: 100, status: 'danger' });
    expect(wrapper).toMatchSnapshot();
  });

  it('invokes onDismiss', () => {
    wrapper.find(`.${styles.Dismiss}`).simulate('click');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

});
