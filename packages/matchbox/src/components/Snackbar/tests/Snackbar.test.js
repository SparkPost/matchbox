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

  it('Renders the "Info" icon with the "default" status with a `label` prop value of "Info"', () => {
    wrapper.setProps({ status: 'default' });

    const infoIcon = wrapper.find('Info');

    expect(infoIcon).toExist();
    expect(infoIcon.props().label).toEqual('Info');
  });

  it('Renders the "CheckCircle" icon with the "success" status with a `label` prop value of "Success"', () => {
    wrapper.setProps({ status: 'success' });

    const infoIcon = wrapper.find('CheckCircle');

    expect(infoIcon).toExist();
    expect(infoIcon.props().label).toEqual('Success');
  });

  it('Renders the "Warning" icon with the "warning" status with a `label` prop value of "Warning"', () => {
    wrapper.setProps({ status: 'warning' });

    const infoIcon = wrapper.find('Warning');

    expect(infoIcon).toExist();
    expect(infoIcon.props().label).toEqual('Warning');
  });

  it('Renders the "Error" icon with the "error" or "danger" status with a `label` prop value of "Error"', () => {
    wrapper.setProps({ status: 'error' });

    const errorIcon = wrapper.find('Error');

    expect(errorIcon).toExist();
    expect(errorIcon.props().label).toEqual('Error');

    wrapper.setProps({ status: 'danger' });

    const dangerIcons = wrapper.find('Error');

    expect(dangerIcons).toExist();
    expect(dangerIcons.props().label).toEqual('Error');
  });

  it('invokes onDismiss', () => {
    wrapper.find(`.${styles.Dismiss}`).simulate('click');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

});
