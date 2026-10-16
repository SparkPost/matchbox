import React from 'react';
import { render, fireEvent } from 'test-utils';
import TextField from '../TextField';

describe('TextField', () => {
  const subject = (props) => render(<TextField id="test-id" {...props}></TextField>).container;

  const input = (wrapper) => wrapper.querySelector('input');
  const label = (wrapper) => wrapper.querySelector('label');
  const helptext = (wrapper) => Array.from(wrapper.querySelectorAll('div')).pop();
  const error = (wrapper) => wrapper.querySelectorAll('div')[5]; // last with no label or help text
  const textarea = (wrapper) => wrapper.querySelector('textarea');

  it('renders defaults correctly', () => {
    const wrapper = subject();
    expect(input(wrapper)).toHaveStyleRule('background-color', 'white');
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
    expect(input(wrapper)).toHaveAttributeValue('resize', null);
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', null);
  });

  it('renders disabled correctly', () => {
    const wrapper = subject({ disabled: true });
    expect(input(wrapper)).toHaveStyleRule('background-color', 'gray.200'); // Token not mocked in tests
    expect(input(wrapper)).toHaveAttributeValue('disabled', '');
    expect(input(wrapper)).toHaveAttributeValue('type', 'text');
  });

  it('renders label with required correctly', () => {
    const wrapper = subject({ required: true, label: 'test label' });
    expect(label(wrapper).textContent).toEqual('test label');
    expect(input(wrapper)).toHaveAttributeValue('required', '');
  });

  it('renders label without required correctly', () => {
    const wrapper = subject({ label: 'test label' });
    expect(label(wrapper).textContent).toEqual('test label');

    // This is a work around to go along with the test below
    expect(label(wrapper)).toHaveStyleRule('font-weight', '500');
  });

  it('renders label without optional correctly', () => {
    const wrapper = subject({ label: 'test label', optional: true });
    expect(label(wrapper).textContent).toEqual('test labelOptional');
  });

  it('renders hidden label correctly', () => {
    const wrapper = subject({ label: 'test label', labelHidden: true });
    expect(label(wrapper).textContent).toEqual('test label');

    // TODO uncomment when screen reader only component is converted to styled components
    // expect(label(wrapper)).toHaveStyleRule('visibility', 'hidden');
    // This is a work around to check label is being hidden for now
    expect(label(wrapper)).not.toHaveStyleRule('font-weight');
  });

  it('renders help text with id correctly', () => {
    const wrapper = subject({ helpText: 'help me' });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(helptext(wrapper).textContent).toEqual('help me');
    expect(helptext(wrapper)).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('renders error with id correctly', () => {
    const wrapper = subject({ error: 'error oh no' });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(error(wrapper).textContent).toEqual('error oh no');
    expect(error(wrapper)).toHaveAttributeValue('id', 'test-id-error');
  });

  it('renders error in label with id correctly', () => {
    const wrapper = subject({
      error: 'error oh no',
      errorInLabel: true,
      label: 'label',
    });
    expect(input(wrapper)).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(label(wrapper).textContent).toEqual('labelerror oh no');
    expect(label(wrapper).querySelector('#test-id-error')).toBeInTheDocument();
  });

  it('renders error and helptext with ids correctly', () => {
    const wrapper = subject({
      error: 'error oh no',
      helpText: 'help me',
    });
    expect(input(wrapper)).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('renders with an input type', () => {
    const wrapper = subject({ type: 'password' });
    expect(input(wrapper)).toHaveAttributeValue('type', 'password');
  });

  it('renders multiline', () => {
    const wrapper = subject({ multiline: true });
    expect(textarea(wrapper)).toBeInTheDocument();
    expect(textarea(wrapper).style.resize).toEqual('both');
  });

  it('renders alignment', () => {
    const wrapper = subject({ align: 'right' });
    expect(input(wrapper)).toHaveStyleRule('text-align', 'right');
  });

  it('renders prefix', () => {
    const wrapper = subject({
      prefix: <span id="prefix">Before Text</span>,
      prefixClassname: 'prefixclass',
    });
    expect(wrapper.querySelector('#prefix')).toBeInTheDocument();
    expect(wrapper.querySelector('span.prefixclass').textContent).toEqual('Before Text');
  });

  it('renders suffix', () => {
    const wrapper = subject({
      suffix: <span id="suffix">After Text</span>,
      suffixClassname: 'suffixclass',
    });
    expect(wrapper.querySelector('#suffix')).toBeInTheDocument();
    expect(wrapper.querySelector('span.suffixclass').textContent).toEqual('After Text');
  });

  it('renders readOnly correctly', () => {
    const wrapper = subject({ readOnly: true });
    expect(input(wrapper)).toHaveAttributeValue('readOnly', '');
  });

  it('invokes events', () => {
    const events = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
    const wrapper = subject(events);
    fireEvent.change(input(wrapper), { target: { value: 'a' } });
    fireEvent.blur(input(wrapper));
    fireEvent.focus(input(wrapper));
    expect(events.onChange).toHaveBeenCalledTimes(1);
    expect(events.onBlur).toHaveBeenCalledTimes(1);
    expect(events.onFocus).toHaveBeenCalledTimes(1);
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <TextField ref={ref} id="test-field"></TextField>
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.id).toEqual('test-field');
  });
});
