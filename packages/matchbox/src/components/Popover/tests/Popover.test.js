import React from 'react';
import Popover from '../Popover';
import { shallow } from 'enzyme';
import * as keyEventHelpers from '../../../helpers/keyEvents';
import * as geometryHelpers from '../../../helpers/geometry';

describe('Popover', () => {
  const Trigger = (props) => <div {...props} />;
  let wrapper;
  let instance;
  let activator;
  let popover;
  const activatorRefMock = jest.fn();
  let toggleSpy;

  beforeEach(() => {
    wrapper = shallow(<Popover trigger={<Trigger/>} portalId='portal'>Popover Content</Popover>);
    instance = wrapper.instance();
    activator = () => shallow(wrapper.instance().renderActivator({ activatorRef: activatorRefMock }));
    popover = () => shallow(wrapper.instance().renderPopover({ activatorWidth: 100 }));
    keyEventHelpers.onKey = jest.fn(() => jest.fn());
    geometryHelpers.getPositionFor = jest.fn(() => 'mock position');
    toggleSpy = jest.spyOn(wrapper.instance(), 'uncontrolledToggle');
  });

  it('should render overlay correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('PopoverOverlay').dive()).toMatchSnapshot();
  });

  it('should render window events when open', () => {
    wrapper.setProps({ open: true });
    expect(wrapper.find('PopoverOverlay').dive().find('WindowEvent')).toHaveLength(4);
  });

  it('should measure position when opened and revert to default when closed', () => {
    wrapper.setProps({ open: true });
    expect(wrapper.find('PopoverOverlay').dive().find('.PopoverOverlay').prop('style')).toMatchSnapshot();
    wrapper.setProps({ open: false });
    expect(wrapper.find('PopoverOverlay').dive().find('.PopoverOverlay').prop('style')).toMatchSnapshot();
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
        wrapper.setProps({ onClose: jest.fn() });
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).not.toHaveBeenCalled();
      });

      it('should call onClose prop if controlled component', () => {
        wrapper.setProps({ open: true, onClose: jest.fn() });
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).toHaveBeenCalledWith('escape', instance.props.onClose);
        expect(keyEventHelpers.onKey).not.toHaveBeenCalledWith('escape', wrapper.instance().uncontrolledToggle);
      });

      it('should close popover if uncontrolled', () => {
        wrapper.setProps({ onClose: jest.fn() });
        wrapper.instance().setState({ open: true });
        wrapper.instance().handleEsc('event');
        expect(keyEventHelpers.onKey).toHaveBeenCalledWith('escape', instance.props.onClose);
        expect(keyEventHelpers.onKey).toHaveBeenCalledWith('escape', wrapper.instance().uncontrolledToggle);
      });
    });

    describe('outside click', () => {
      describe('is outside', () => {

        beforeEach(() => {
          wrapper.setProps({ onClose: jest.fn() });
          instance.popover = { contains: jest.fn(() => false) };
          instance.activator = { contains: jest.fn(() => false) };
        });

        it('should close if controlled open', () => {
          wrapper.setProps({ open: true });
          instance.handleOutsideClick('event');
          expect(toggleSpy).not.toHaveBeenCalled();
          expect(instance.props.onClose).toHaveBeenCalled();
        });

        it('should close if uncontrolled open', () => {
          instance.setState({ open: true });
          instance.handleOutsideClick('event');
          expect(toggleSpy).toHaveBeenCalled();
          expect(instance.props.onClose).toHaveBeenCalled();
        });

        it('should not close if closed', () => {
          instance.setState({ open: false });
          instance.handleOutsideClick('event');
          wrapper.setProps({ open: false });
          instance.handleOutsideClick('event');
          expect(toggleSpy).not.toHaveBeenCalled();
          expect(instance.props.onClose).not.toHaveBeenCalled();
        });
      });

      describe('is inside', () => {
        beforeEach(() => {
          wrapper.setProps({ onClose: jest.fn() });
          instance.popover = { contains: jest.fn(() => true) };
          instance.activator = { contains: jest.fn(() => true) };
        });

        it('should not close', () => {
          instance.setState({ open: true });
          instance.handleOutsideClick('event');
          expect(toggleSpy).not.toHaveBeenCalled();
          expect(instance.props.onClose).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('handle trigger toggle', () => {
    it('should do nothing if popover is controlled', () => {
      instance.setState({ open: null }); // Reverts to default state
      instance.handleTrigger();
      expect(toggleSpy).not.toHaveBeenCalled();
    });

    it('should open popover if uncontrolled', () => {
      instance.handleTrigger();
      expect(toggleSpy).toHaveBeenCalled();
    });
  });
});
