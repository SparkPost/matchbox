import React from 'react';
import { render, fireEvent } from 'test-utils';
import { Select } from '../../Select';

describe('Select', () => {
  const subject = (props) => render(<Select options={['option 1']} {...props} />).container;

  it('should render with a value', () => {
    const wrapper = subject({ options: ['option 1', 'test-value'], value: 'test-value', onChange: jest.fn() });
    expect(wrapper.querySelector('select').value).toEqual('test-value');
    expect(wrapper.querySelector('select').getAttribute('aria-describedby')).toBeNull();
  });

  it('should render with required label', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-label');
    expect(wrapper.querySelector('select')).toHaveAttributeValue('required', '');
  });

  it('should render with optional label', () => {
    const wrapper = subject({ optional: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-labelOptional');
  });

  it('should render with id', () => {
    const wrapper = subject({ id: 'test-id', label: 'test-label' });
    expect(wrapper.querySelector('label')).toHaveAttributeValue('for', 'test-id');
    expect(wrapper.querySelector('select')).toHaveAttributeValue('id', 'test-id');
  });

  it('should render with help text', () => {
    const wrapper = subject({ id: 'test-id', helpText: 'test-help' });
    expect(Array.from(wrapper.querySelectorAll('div')).pop().textContent).toEqual('test-help');
    expect(wrapper.querySelector('select')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext',
    );
    expect(Array.from(wrapper.querySelectorAll('div')).pop()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('should render with error', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error' });
    expect(Array.from(wrapper.querySelectorAll('[data-id="error-message"]')).pop().textContent).toEqual(
      'test-error',
    );
    expect(wrapper.querySelector('select')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-error',
    );
    expect(Array.from(wrapper.querySelectorAll('[data-id="error-message"]')).pop()).toHaveAttributeValue(
      'id',
      'test-id-error',
    );
  });

  it('should render with error and helptext describedby', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error', helpText: 'test-help' });
    expect(wrapper.querySelector('select')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('should render with error in label', () => {
    const wrapper = subject({ error: 'test-error', errorInLabel: true, label: 'test-label' });
    expect(wrapper.querySelector('label').textContent).toEqual('test-labeltest-error');
  });

  it('should render string options', () => {
    const wrapper = subject({ options: ['1', '2'] });
    expect(wrapper.querySelectorAll('option')).toHaveLength(2);
    expect(wrapper.querySelector('option').textContent).toEqual('1');
  });

  it('should render object options', () => {
    const wrapper = subject({
      options: [
        { value: '1', label: 'one' },
        { value: '2', label: 'two' },
      ],
    });
    expect(wrapper.querySelectorAll('option')).toHaveLength(2);
    expect(wrapper.querySelector('option').textContent).toEqual('one');
  });

  it('should render placeholder option', () => {
    const wrapper = subject({ placeholder: 'placeholder', placeholderValue: '1' });
    expect(wrapper.querySelectorAll('option')).toHaveLength(2);
    expect(wrapper.querySelector('option').textContent).toEqual('placeholder');
  });

  it('should render no options', () => {
    const wrapper = subject({ options: [] });
    expect(wrapper.querySelectorAll('option')).toHaveLength(0);
  });

  it('should invoke events', () => {
    const events = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = subject({ ...events });
    fireEvent.change(wrapper.querySelector('select'));
    fireEvent.focus(wrapper.querySelector('select'));
    fireEvent.blur(wrapper.querySelector('select'));
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
          <Select ref={ref} id="test-select" options={[]}></Select>
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.id).toEqual('test-select');
  });
});
