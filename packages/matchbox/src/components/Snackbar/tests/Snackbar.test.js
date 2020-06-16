import React from 'react';
import 'jest-styled-components';

import Snackbar from '../Snackbar';

describe('Snackbar', () => {
  const defaults = {
    onDismiss: jest.fn(),
  };

  const subject = props =>
    global.mountStyled(
      <Snackbar {...defaults} {...props}>
        Snacksssss
      </Snackbar>,
    );

  it('renders default status and text content correctly', () => {
    const wrapper = subject();
    expect(wrapper.find('[aria-label="Info"]')).toExist();
    expect(
      wrapper
        .find('Box')
        .at(1)
        .text(),
    ).toEqual('Snacksssss');
    expect(wrapper.find('button').text()).toEqual('Close');
  });

  it('renders Snackbar with a danger status and maxwidth', () => {
    const wrapper = subject({ status: 'danger', maxWidth: 100 });
    expect(wrapper.find('Box').at(1)).toHaveStyleRule('max-width', '100px');
    expect(wrapper).toHaveStyleRule('background', '#d9363e');
    expect(wrapper.find('[aria-label="Error"]')).toExist();
  });

  it('renders Snackbar with a warning status', () => {
    const wrapper = subject({ status: 'warning' });
    expect(wrapper).toHaveStyleRule('background', '#ffe75c');
    expect(wrapper.find('[aria-label="Warning"]')).toExist();
  });

  it('renders Snackbar with a success status', () => {
    const wrapper = subject({ status: 'success' });
    expect(wrapper).toHaveStyleRule('background', '#067852');
    expect(wrapper.find('[aria-label="Success"]')).toExist();
  });

  it('renders Snackbar with an error status', () => {
    const wrapper = subject({ status: 'error' });
    expect(wrapper).toHaveStyleRule('background', '#d9363e');
    expect(wrapper.find('[aria-label="Error"]')).toExist();
  });

  it('invokes onDismiss', () => {
    const wrapper = subject();
    wrapper.find('button').simulate('click');
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
    global.mountStyled(<Test />);
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
