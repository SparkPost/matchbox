import React from 'react';
import { render, fireEvent } from 'test-utils';
import Snackbar from '../Snackbar';

describe('Snackbar', () => {
  const defaults = {
    onDismiss: jest.fn(),
    'data-id': 'test-id',
  };

  const subject = (props) =>
    render(
      <Snackbar {...defaults} {...props}>
        Snacksssss
      </Snackbar>,
    ).container;

  it('renders default status and text content correctly', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[aria-label="Info"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
    expect(wrapper.firstChild.children[1].textContent).toEqual('Snacksssss');
    expect(wrapper.querySelector('button').textContent).toEqual('Close');
  });

  it('renders Snackbar with a danger status and maxwidth', () => {
    const wrapper = subject({ status: 'danger', maxWidth: '1000px' });
    expect(wrapper.firstChild.children[1]).toHaveStyleRule('max-width', '1000px');
    expect(wrapper.firstChild).toHaveStyleRule('background', '#D9363E');
    expect(wrapper.querySelector('[aria-label="Error"]')).toBeInTheDocument();
  });

  it('renders Snackbar with a warning status', () => {
    const wrapper = subject({ status: 'warning' });
    expect(wrapper.firstChild).toHaveStyleRule('background', '#FFE75C');
    expect(wrapper.querySelector('[aria-label="Warning"]')).toBeInTheDocument();
  });

  it('renders Snackbar with a success status', () => {
    const wrapper = subject({ status: 'success' });
    expect(wrapper.firstChild).toHaveStyleRule('background', '#067852');
    expect(wrapper.querySelector('[aria-label="Success"]')).toBeInTheDocument();
  });

  it('renders Snackbar with an error status', () => {
    const wrapper = subject({ status: 'error' });
    expect(wrapper.firstChild).toHaveStyleRule('background', '#D9363E');
    expect(wrapper.querySelector('[aria-label="Error"]')).toBeInTheDocument();
  });

  it('invokes onDismiss', () => {
    const wrapper = subject();
    fireEvent.click(wrapper.querySelector('button'));
    expect(defaults.onDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <Snackbar ref={ref} onDismiss={jest.fn()}>
            test content
          </Snackbar>
          not this
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
