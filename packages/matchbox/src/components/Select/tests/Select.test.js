import React from 'react';
import { Select } from '../../Select';

describe('Select', () => {
  const subject = props => global.mountStyled(<Select options={['option 1']} {...props} />);

  it('should render with a value', () => {
    const wrapper = subject({ value: 'test-value', onChange: jest.fn() });
    expect(wrapper.find('select').prop('value')).toEqual('test-value');
    expect(wrapper.find('select').prop('aria-describedby')).toBeUndefined();
  });

  it('should render with required label', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-label');
    expect(wrapper.find('select')).toHaveAttributeValue('required', '');
  });

  it('should render with optional label', () => {
    const wrapper = subject({ optional: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-labelOptional');
  });

  it('should render with id', () => {
    const wrapper = subject({ id: 'test-id', label: 'test-label' });
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-id');
    expect(wrapper.find('select')).toHaveAttributeValue('id', 'test-id');
  });

  it('should render with help text', () => {
    const wrapper = subject({ id: 'test-id', helpText: 'test-help' });
    expect(
      wrapper
        .find('div')
        .last()
        .text(),
    ).toEqual('test-help');
    expect(wrapper.find('select')).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(wrapper.find('div').last()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('should render with error', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error' });
    expect(
      wrapper
        .find('[data-id="error-message"]')
        .last()
        .text(),
    ).toEqual('test-error');
    expect(wrapper.find('select')).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(wrapper.find('[data-id="error-message"]').last()).toHaveAttributeValue(
      'id',
      'test-id-error',
    );
  });

  it('should render with error and helptext describedby', () => {
    const wrapper = subject({ id: 'test-id', error: 'test-error', helpText: 'test-help' });
    expect(wrapper.find('select')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('should render with error in label', () => {
    const wrapper = subject({ error: 'test-error', errorInLabel: true, label: 'test-label' });
    expect(wrapper.find('label').text()).toEqual('test-labeltest-error');
  });

  it('should render string options', () => {
    const wrapper = subject({ options: ['1', '2'] });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('1');
  });

  it('should render object options', () => {
    const wrapper = subject({
      options: [
        { value: '1', label: 'one' },
        { value: '2', label: 'two' },
      ],
    });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('one');
  });

  it('should render placeholder option', () => {
    const wrapper = subject({ placeholder: 'placeholder', placeholderValue: '1' });
    expect(wrapper.find('option')).toHaveLength(2);
    expect(
      wrapper
        .find('option')
        .first()
        .text(),
    ).toEqual('placeholder');
  });

  it('should render no options', () => {
    const wrapper = subject({ options: [] });
    expect(wrapper.find('option')).toHaveLength(0);
  });

  it('should invoke events', () => {
    const events = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = subject({ ...events });
    wrapper.find('select').simulate('change');
    wrapper.find('select').simulate('focus');
    wrapper.find('select').simulate('blur');
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
    global.mountStyled(<Test />);
    expect(document.activeElement.id).toEqual('test-select');
  });
});
