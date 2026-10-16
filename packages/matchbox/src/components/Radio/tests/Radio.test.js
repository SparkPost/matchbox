import React from 'react';
import { render, fireEvent } from 'test-utils';

import Radio from '../Radio';
import { StyledChecked, StyledUnchecked } from '../styles';
import { tokens } from '@sparkpost/design-tokens';

describe('Radio', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = (props) => render(<Radio id="test-id" {...events} {...props} />).container;
  const checked = `:checked ~ span ${StyledChecked}`;
  const unchecked = `:checked ~ span ${StyledUnchecked}`;

  it('renders with id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('input')).toHaveAttributeValue('id', 'test-id');
    expect(wrapper.querySelector('label')).toHaveAttributeValue('for', 'test-id');
  });

  it('renders checked and value', () => {
    const wrapper = subject({ checked: true, value: 'test-value' });
    expect(wrapper.querySelector('input')).toHaveAttributeValue('checked', '');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('value', 'test-value');
    expect(wrapper.querySelector('label')).toHaveStyleRule('cursor', 'pointer', {
      modifier: ':hover',
    });

    // This assertion tests the lack of an error
    // Not possible to check for checked/unchecked styles since the selectors use html input attributes
    expect(wrapper.querySelector('input')).toHaveStyleRule('opacity', '1', {
      modifier: checked,
    });

    expect(wrapper.querySelector('input')).toHaveStyleRule('opacity', '0', {
      modifier: unchecked,
    });
  });

  it('renders a label', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.textContent).toEqual('test-label');
  });

  it('renders error', () => {
    const wrapper = subject({ error: 'test-error' });
    expect(wrapper.querySelector(`${StyledUnchecked}`)).toHaveStyleRule('fill', tokens.color_red_700);
    expect(wrapper.textContent).toEqual('test-error');
    expect(wrapper.querySelector('input')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-error',
    );
    expect(Array.from(wrapper.querySelectorAll('div')).pop()).toHaveAttributeValue('id', 'test-id-error');
  });

  it('renders disabled', () => {
    const wrapper = subject({ disabled: true });
    expect(wrapper.querySelector('label')).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':hover',
    });
    expect(wrapper.querySelector('input')).toBeDisabled();
  });

  it('renders help text', () => {
    const wrapper = subject({ helpText: 'test-help' });
    expect(wrapper.textContent).toEqual('test-help');
    expect(wrapper.querySelector('input')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext',
    );
    expect(Array.from(wrapper.querySelectorAll('div')).pop()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('renders with error and helptext describedby', () => {
    const wrapper = subject({ error: 'test-error', helpText: 'test-help' });
    expect(wrapper.querySelector('input')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('renders with system props', () => {
    const wrapper = subject({ mb: '500' });
    expect(wrapper.firstChild).toHaveStyleRule('margin-bottom', '1.5rem');
    expect(wrapper.querySelector('input').getAttribute('mb')).toBeNull();
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
          <Radio ref={ref} id="test-radio"></Radio>
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.id).toEqual('test-radio');
  });
});
