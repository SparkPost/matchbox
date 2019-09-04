import React from 'react';
import Banner from '../Banner';
import { shallow } from 'enzyme';
import styles from '../Banner.module.scss';

describe('Banner', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'Test Banner',
      onDismiss: jest.fn(),
      action: null,
      actions: null

    };
    wrapper = shallow(<Banner {...props}><p>You know this is a banner</p></Banner>);
  });

  it('renders correctly with default props', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('IconSection').dive().html()).toEqual(null);
  });

  it('renders status', () => {
    wrapper.setProps({ status: 'success' });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('IconSection').dive()).toMatchSnapshot();

    wrapper.setProps({ status: 'danger' });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('IconSection').dive()).toMatchSnapshot();

    wrapper.setProps({ status: 'warning' });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('IconSection').dive()).toMatchSnapshot();

    wrapper.setProps({ status: 'info' });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('IconSection').dive()).toMatchSnapshot();
  });

  it('dismisses banner correctly upon clicking dismiss icon', () => {
    const elem = `a.${styles.Dismiss}`;
    wrapper.find(elem).simulate('click');
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });


  it('invokes onClick func of action', () => {
    const action = { content: 'Click me', onClick: jest.fn() };
    wrapper.setProps({ action });
    expect(wrapper).toMatchSnapshot();
    wrapper.find(`.${styles.Actions}`).find('Button').simulate('click');
    expect(action.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders multiple banner actions', () => {
    const actions = [
      { content: 'Click Me 1', onClick: jest.fn() },
      { content: 'Click Me 2', onClick: jest.fn() }
    ];

    wrapper.setProps({ actions });
    expect(wrapper).toMatchSnapshot();
    wrapper.find(`.${styles.Actions}`).find('Button').at(0).simulate('click');
    expect(actions[0].onClick).toHaveBeenCalledTimes(1);

    wrapper.find(`.${styles.Actions}`).find('Button').at(1).simulate('click');
    expect(actions[1].onClick).toHaveBeenCalledTimes(1);
  });
});
