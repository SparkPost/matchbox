import React from 'react';
import RadioCard from '../RadioCard';
import { render, fireEvent } from 'test-utils';

describe('RadioCard', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = (props) => render(<RadioCard id="test-id" {...events} {...props} />).container;

  it('renders with id and default attributes', () => {
    render(<RadioCard id="test-id" data-track="true" />);
    expect(document.querySelector('input#test-id')).toBeTruthy();
    expect(document.querySelector('input[data-track="true"]')).toBeTruthy();
  });

  it('renders checked, value, and name', () => {
    const wrapper = subject({ checked: true, value: 'test-value', name: 'test-name' });
    expect(wrapper.querySelector('input')).toHaveAttributeValue('checked', '');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('value', 'test-value');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('name', 'test-name');
  });

  it('renders a label', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.textContent).toEqual('test-label');
  });

  it('renders a label and children', () => {
    const wrapper = subject({ label: 'test-label', children: <>test children</> });
    expect(wrapper.textContent).toEqual('test-labeltest children');
  });

  it('renders disabled', () => {
    const wrapper = subject({ disabled: true });
    expect(wrapper.querySelector('input')).toBeDisabled();
  });

  it('should invoke events', () => {
    const wrapper = subject();
    fireEvent.click(wrapper.querySelector('input'));
    fireEvent.focus(wrapper.querySelector('input'));
    fireEvent.blur(wrapper.querySelector('input'));
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
    render(<Test />).container;
    expect(document.activeElement.id).toEqual('test-card');
  });

  describe('Group', () => {
    it('renders disabled in a group', () => {
      const wrapper = render(
        <RadioCard.Group label="label">
          <RadioCard id="test-id1" disabled />
          <RadioCard id="test-id2" />
        </RadioCard.Group>,
      ).container;
      expect(wrapper.querySelectorAll('input')[0]).toBeDisabled();
      expect(wrapper.querySelectorAll('input')[1]).not.toBeDisabled();
    });

    it('renders an optional and label', () => {
      const wrapper = render(
        <RadioCard.Group label="label" optional>
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      ).container;
      expect(wrapper.textContent).toEqual('labelOptional');
    });

    it('renders an horizontal orientation', () => {
      const wrapper = render(
        <RadioCard.Group label="label" orientation="horizontal">
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
    });

    it('renders a grid orientation', () => {
      const wrapper = render(
        <RadioCard.Group label="label" orientation="grid">
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
    });

    it('renders a compact space when vertical', () => {
      const wrapper = render(
        <RadioCard.Group label="label" space="compact">
          <RadioCard id="test-id" />
          <RadioCard id="test-id-2" />
        </RadioCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
      expect(wrapper.querySelector('#test-id-2')).toBeInTheDocument();
    });

    it('renders helpText', () => {
      const { getByText } = render(
        <RadioCard.Group label="label" helpText="help">
          <RadioCard id="test-id" />
        </RadioCard.Group>,
      );
      expect(getByText('help')).toBeTruthy();
    });
  });
});
