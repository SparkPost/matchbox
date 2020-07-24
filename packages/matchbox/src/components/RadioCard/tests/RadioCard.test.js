import React from 'react';
import RadioCard from '../RadioCard';
import 'jest-styled-components';

describe('RadioCard', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = props => global.mountStyled(<RadioCard id="test-id" {...events} {...props} />);

  it('renders with id', () => {
    const wrapper = subject();
    expect(wrapper.find('input')).toHaveAttributeValue('id', 'test-id');
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-id');
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

  it('renders heavy weight', () => {
    const wrapper = subject({ weight: 'heavy' });
    expect(wrapper.find('[data-id="radio-card-header"]')).toHaveStyleRule('font-size', '1rem');
  });

  it('renders light weight', () => {
    const wrapper = subject({ weight: 'light' });
    expect(wrapper.find('[data-id="radio-card-header"]')).toHaveStyleRule('font-size', '300');
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
});
