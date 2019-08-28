import React from 'react';
import { shallow } from 'enzyme';
import * as keyMock from '../../../helpers/keyEvents';
import Modal from '../Modal';
import Content from '../Content';

jest.mock('../../../helpers/keyEvents');

describe('Modal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onClose: jest.fn(),
      open: false
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

  it('should render contents when open', () => {
    wrapper.setProps({ open: true });
    expect(wrapper).toMatchSnapshot();

    const content = shallow(<Content open>Content test</Content>);

    expect(content).toMatchSnapshot();

    const Children = shallow(content.props().children);

    expect(Children).toMatchSnapshot();
  });

  it('handle key down', () => {
    keyMock.onKey.mockImplementationOnce(() => jest.fn());
    wrapper.setProps({ open: true });
    wrapper.instance().handleKeyDown();
    expect(keyMock.onKey).toHaveBeenCalledWith('escape', props.onClose);
  });

  it('handle outside click', () => {
    wrapper.setProps({ open: true });
    wrapper.instance().content = { contains: jest.fn(() => false) };
    wrapper.instance().container = { contains: jest.fn(() => true) };
    wrapper.instance().handleOutsideClick({ target: 'test' });
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
