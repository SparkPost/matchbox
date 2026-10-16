import React from 'react';
import CheckboxCard from '../CheckboxCard';
import { render, fireEvent } from 'test-utils';

describe('CheckboxCard', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = (props) => render(<CheckboxCard id="test-id" {...events} {...props} />).container;

  it('renders with id and default attributes', () => {
    render(<CheckboxCard id="test-id" data-track="true" />);
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
          <CheckboxCard ref={ref} id="test-card"></CheckboxCard>
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.id).toEqual('test-card');
  });

  describe('Group', () => {
    it('renders disabled in a group', () => {
      const wrapper = render(
        <CheckboxCard.Group label="label">
          <CheckboxCard id="test-id1" disabled />
          <CheckboxCard id="test-id2" />
        </CheckboxCard.Group>,
      ).container;
      expect(wrapper.querySelectorAll('input')[0]).toBeDisabled();
      expect(wrapper.querySelectorAll('input')[1]).not.toBeDisabled();
    });

    it('renders an optional and label', () => {
      const wrapper = render(
        <CheckboxCard.Group label="label" optional>
          <CheckboxCard id="test-id" />
        </CheckboxCard.Group>,
      ).container;
      expect(wrapper.textContent).toEqual('labelOptional');
    });

    it('renders an horizontal orientation', () => {
      const wrapper = render(
        <CheckboxCard.Group label="label" orientation="horizontal">
          <CheckboxCard id="test-id" />
        </CheckboxCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
    });

    it('renders a grid orientation', () => {
      const wrapper = render(
        <CheckboxCard.Group label="label" orientation="grid">
          <CheckboxCard id="test-id" />
        </CheckboxCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
    });

    it('renders a compact space when vertical', () => {
      const wrapper = render(
        <CheckboxCard.Group label="label" space="compact">
          <CheckboxCard id="test-id" />
          <CheckboxCard id="test-id-2" />
        </CheckboxCard.Group>,
      ).container;
      expect(wrapper.querySelector('#test-id')).toBeInTheDocument();
      expect(wrapper.querySelector('#test-id-2')).toBeInTheDocument();
    });

    it('renders helpText', () => {
      const { getByText } = render(
        <CheckboxCard.Group label="label" helpText="help">
          <CheckboxCard id="test-id" />
        </CheckboxCard.Group>,
      );
      expect(getByText('help')).toBeTruthy();
    });
  });
});
