import React from 'react';

import Radio from '../Radio';
import { StyledChecked, StyledUnchecked } from '../styles';
import { tokens } from '@sparkpost/design-tokens';

describe('Radio', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = (props) => global.mountStyled(<Radio id="test-id" {...events} {...props} />);
  const checked = `:checked ~ span ${StyledChecked}`;
  const unchecked = `:checked ~ span ${StyledUnchecked}`;

  it('renders with id', () => {
    const wrapper = subject();
    expect(wrapper.find('input')).toHaveAttributeValue('id', 'test-id');
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-id');
  });

  it('renders checked and value', () => {
    const wrapper = subject({ checked: true, value: 'test-value' });
    expect(wrapper.find('input')).toHaveAttributeValue('checked', '');
    expect(wrapper.find('input')).toHaveAttributeValue('value', 'test-value');
    expect(wrapper.find('label')).toHaveStyleRule('cursor', 'pointer', { modifier: ':hover' });

    // This assertion tests the lack of an error
    // Not possible to check for checked/unchecked styles since the selectors use html input attributes
    expect(wrapper.find('input')).toHaveStyleRule('opacity', '1', {
      modifier: checked,
    });

    expect(wrapper.find('input')).toHaveStyleRule('opacity', '0', {
      modifier: unchecked,
    });
  });

  it('renders a label', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.text()).toEqual('test-label');
  });

  it('renders error', () => {
    const wrapper = subject({ error: 'test-error' });
    expect(wrapper.find(StyledUnchecked)).toHaveStyleRule('fill', tokens.color_red_700);
    expect(wrapper.text()).toEqual('test-error');
    expect(wrapper.find('input')).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(wrapper.find('div').last()).toHaveAttributeValue('id', 'test-id-error');
  });

  it('renders disabled', () => {
    const wrapper = subject({ disabled: true });
    expect(wrapper.find('label')).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':hover' });
    expect(wrapper.find('input')).toBeDisabled();
  });

  it('renders help text', () => {
    const wrapper = subject({ helpText: 'test-help' });
    expect(wrapper.text()).toEqual('test-help');
    expect(wrapper.find('input')).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(wrapper.find('div').last()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('renders with error and helptext describedby', () => {
    const wrapper = subject({ error: 'test-error', helpText: 'test-help' });
    expect(wrapper.find('input')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('renders with system props', () => {
    const wrapper = subject({ mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
    expect(wrapper.find('input').prop('mb')).toBeUndefined();
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
          <Radio ref={ref} id="test-radio"></Radio>
        </>
      );
    }
    global.mountStyled(<Test />);
    expect(document.activeElement.id).toEqual('test-radio');
  });
});
