import React from 'react';
import Popover from '../Popover';
import { shallow } from 'enzyme';
import * as keyEventHelpers from '../../../helpers/keyEvents';

describe('Popover', () => {
  const Trigger = (props) => <div {...props} />;
  let wrapper;
  let activator;
  let popover;
  const activatorRefMock = jest.fn();
  let toggleSpy;

  beforeEach(() => {
    wrapper = shallow(<Popover trigger={<Trigger/>} portalId='portal'>Popover Content</Popover>);
    activator = () => shallow(wrapper.instance().renderActivator({ activatorRef: activatorRefMock }));
    popover = () => shallow(wrapper.instance().renderPopover({ activatorWidth: 100 }));
    keyEventHelpers.onKey = jest.fn(() => jest.fn());
    toggleSpy = jest.spyOn(wrapper.instance(), 'uncontrolledToggle');
  });

  it('should render overlay correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should use local state if not controlled', () => {
    expect(shallow(<Popover />)).toHaveState({ open: false });
  });

  it('should use not use local state if a control prop is provided', () => {
    expect(shallow(<Popover open={false} />)).toHaveState({ open: null });
  });

  describe('activator render', () => {
    it('should render correctly', () => {
      expect(activator()).toMatchSnapshot();
    });

    it('should render a wrapper component correctly', () => {
      wrapper.setProps({ wrapper: 'div' });
      expect(activator()).toMatchSnapshot();
    });

    it('should handle an uncontrolled open', () => {
      expect(wrapper.state().open).toBe(false);
      activator().simulate('click');
      expect(wrapper.state().open).toBe(true);
    });
  });

  describe('popover render', () => {
    it('should render correctly', () => {
      expect(popover()).toMatchSnapshot();
    });

    it('should be open if controlled or uncontrolled', () => {
      expect(popover().props().in).toEqual(false);
      wrapper.setProps({ open: true });
      expect(popover().props().in).toEqual(true);
      wrapper.setProps({ open: false });
      activator().simulate('click');
      expect(popover().props().in).toEqual(true);
    });

    it('should use correct classnames', () => {
      wrapper.setProps({ sectioned: true, top: true, left: true });
      expect(popover().props().children()).toMatchSnapshot();
    });
  });

  describe('window events', () => {
    describe('escape', () => {
      it('should do nothing if popover is not open', () => {
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).not.toHaveBeenCalled();
      });

      it('should call onClose prop if controlled component', () => {
        const props = {
          open: true,
          onClose: jest.fn()
        };
        wrapper.setProps(props);
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).toHaveBeenCalledWith('escape', props.onClose);
      });

      it('should close popover if uncontrolled', () => {
        wrapper.instance().setState({ open: true });
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).toHaveBeenCalledWith('escape', wrapper.instance().uncontrolledToggle);
      });
    });

    describe('outside click', () => {
      const props = { onClose: jest.fn() };

      beforeEach(() => {
        wrapper.setProps(props);
      });

      it('should do nothing click is inside activator or popover', () => {
        wrapper.instance().popover = { contains: jest.fn(() => true) };
        wrapper.instance().activator = { contains: jest.fn(() => true) };
        wrapper.instance().handleOutsideClick('event');
        expect(toggleSpy).not.toHaveBeenCalled();
        expect(props.onClose).not.toHaveBeenCalled();
      });

      it('should close popover if uncontrolled', () => {
        wrapper.instance().setState({ open: true });
        wrapper.instance().popover = { contains: jest.fn(() => false) };
        wrapper.instance().activator = { contains: jest.fn(() => false) };
        wrapper.instance().handleOutsideClick('event');
        expect(toggleSpy).toHaveBeenCalled();
        expect(props.onClose).not.toHaveBeenCalled();
      });

      it('should close popover if controlled', () => {
        wrapper.setProps({ open: true });
        wrapper.instance().popover = { contains: jest.fn(() => false) };
        wrapper.instance().activator = { contains: jest.fn(() => false) };
        wrapper.instance().handleOutsideClick('event');
        expect(toggleSpy).not.toHaveBeenCalled();
        expect(props.onClose).toHaveBeenCalled();
      });
    });
  });

  describe('handle trigger toggle', () => {
    it('should do nothing if popover is controlled', () => {
      wrapper.instance().setState({ open: null }); // Reverts to default state
      wrapper.instance().handleTrigger();
      expect(toggleSpy).not.toHaveBeenCalled();
    });

    it('should open popover if uncontrolled', () => {
      wrapper.instance().handleTrigger();
      expect(toggleSpy).toHaveBeenCalled();
    });
  });
});
