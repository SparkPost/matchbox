import React from 'react';
import RadioCard from '../RadioCard';
import { render } from 'test-utils';

describe('RadioCard', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = (props) => global.mountStyled(<RadioCard id="test-id" {...events} {...props} />);

  it('renders with id and default attributes', () => {
    render(<RadioCard id="test-id" data-track="true" />);
    expect(document.querySelector('input#test-id')).toBeTruthy();
    expect(document.querySelector('input[data-track="true"]')).toBeTruthy();
  });

  it('renders checked, value, and name', () => {
    const wrapper = subject({ checked: true, value: 'test-value', name: 'test-name' });
    expect(wrapper.find('input')).toHaveAttributeValue('checked', '');
    expect(wrapper.find('input')).toHaveAttributeValue('value', 'test-value');
    expect(wrapper.find('input')).toHaveAttributeValue('name', 'test-name');
  });

  it('renders a label', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.text()).toEqual('test-label');
  });

  it('renders a label and children', () => {
    const wrapper = subject({ label: 'test-label', children: <>test children</> });
    expect(wrapper.text()).toEqual('test-labeltest children');
  });

  it('renders disabled', () => {
    const wrapper = subject({ disabled: true });
    expect(wrapper.find('input')).toBeDisabled();
  });

  it('should invoke events', () => {
    const wrapper = subject();
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(events.onChange).toHaveBeenCalled();
    expect(events.onBlur).toHaveBeenCalled();
    expect(events.onFocus).toHaveBeenCalled();
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <RadioCard ref={ref} id="test-card"></RadioCard>
        </>
      );
    }
    global.mountStyled(<Test />);
    expect(document.activeElement.id).toEqual('test-card');
  });

  describe('Group', () => {
    it('renders disabled in a group', () => {
      const wrapper = global.mountStyled(
        <RadioCard.Group label="label">
          <RadioCard id="test-id1" disabled />
          <RadioCard id="test-id2" />
        </RadioCard.Group>,
      );
      expect(wrapper.find('input').at(0)).toBeDisabled();
      expect(wrapper.find('input').at(1)).not.toBeDisabled();
    });

    it('renders an optional and label', () => {
      const wrapper = global.mountStyled(
        <RadioCard.Group label="label" optional>
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      );
      expect(wrapper.text()).toEqual('labelOptional');
    });

    it('renders an horizontal orientation', () => {
      const wrapper = global.mountStyled(
        <RadioCard.Group label="label" orientation="horizontal">
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      );
      expect(wrapper.find('#test-id')).toExist();
    });

    it('renders a grid orientation', () => {
      const wrapper = global.mountStyled(
        <RadioCard.Group label="label" orientation="grid">
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      );
      expect(wrapper.find('#test-id')).toExist();
    });

    it('renders a compact space when vertical', () => {
      const wrapper = global.mountStyled(
        <RadioCard.Group label="label" space="compact">
          <RadioCard id="test-id" />
          <RadioCard id="test-id-2" />
        </RadioCard.Group>,
      );
      expect(wrapper.find('#test-id')).toExist();
      expect(wrapper.find('#test-id-2')).toExist();
    });
  });
});
