import React from 'react';
import { render } from 'test-utils';
import Drawer from '../Drawer';

describe('Drawer', () => {
  const subject = (props) =>
    render(
      <Drawer id="test-id" {...props}>
        {props.children || <Drawer.Content>test content</Drawer.Content>}
      </Drawer>,
    ).baseElement;

  it('should not render when closed', () => {
    const wrapper = subject({ open: false });
    expect(wrapper.querySelector('[data-id="drawer-wrapper"]')).not.toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="drawer-overlay"]')).not.toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="drawer-container"]')).not.toBeInTheDocument();
  });

  it('should render when open', () => {
    const wrapper = subject({ open: true });
    expect(wrapper.querySelector('[data-id="drawer-wrapper"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="drawer-overlay"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[data-id="drawer-container"]')).toBeInTheDocument();
    expect(wrapper.querySelector('#test-id').textContent).toEqual('test content');
  });

  it('should render any children', () => {
    const wrapper = subject({ open: true, children: <div id="test">test children</div> });
    expect(wrapper.querySelector('#test')).toBeInTheDocument();
  });

  it('should render on right by default', () => {
    const wrapper = subject({ open: true });
    expect(wrapper.querySelectorAll('[data-id="drawer-container"]')[0]).toHaveStyleRule(
      'right',
      '0',
    );
    expect(wrapper.querySelectorAll('[data-id="drawer-container"]')[0]).toHaveStyleRule(
      'left',
      'auto',
    );
  });

  it('should render on left', () => {
    const wrapper = subject({ open: true, position: 'left' });
    expect(wrapper.querySelectorAll('[data-id="drawer-container"]')[0]).toHaveStyleRule(
      'left',
      '0',
    );
    expect(wrapper.querySelectorAll('[data-id="drawer-container"]')[0]).toHaveStyleRule(
      'right',
      'auto',
    );
  });

  it('renders with with a ref', () => {
    function Test() {
      const ref = React.useRef();
      React.useEffect(() => {
        ref.current.focus();
      }, []);
      return (
        <>
          <Drawer ref={ref} open id="test-id">
            <Drawer.Content>test content</Drawer.Content>
          </Drawer>
          not this
        </>
      );
    }
    render(<Test />).container;
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
