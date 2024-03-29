import React from 'react';
import Drawer from '../Drawer';

describe('Drawer', () => {
  const subject = props =>
    global.mountStyled(
      <Drawer id="test-id" {...props}>
        {props.children || <Drawer.Content>test content</Drawer.Content>}
      </Drawer>,
    );

  it('should not render when closed', () => {
    const wrapper = subject({ open: false });
    expect(wrapper.find('[data-id="drawer-wrapper"]')).not.toExist();
    expect(wrapper.find('[data-id="drawer-overlay"]')).not.toExist();
    expect(wrapper.find('[data-id="drawer-container"]')).not.toExist();
  });

  it('should render when open', () => {
    const wrapper = subject({ open: true });
    expect(wrapper.find('[data-id="drawer-wrapper"]')).toExist();
    expect(wrapper.find('[data-id="drawer-overlay"]')).toExist();
    expect(wrapper.find('[data-id="drawer-container"]')).toExist();
    expect(
      wrapper
        .find('#test-id')
        .first()
        .text(),
    ).toEqual('test content');
  });

  it('should render any children', () => {
    const wrapper = subject({ open: true, children: <div id="test">test children</div> });
    expect(wrapper.find('#test')).toExist();
  });

  it('should render on right by default', () => {
    const wrapper = subject({ open: true });
    expect(wrapper.find('[data-id="drawer-container"]').at(0)).toHaveStyleRule('right', '0');
    expect(wrapper.find('[data-id="drawer-container"]').at(0)).toHaveStyleRule('left', 'auto');
  });

  it('should render on left', () => {
    const wrapper = subject({ open: true, position: 'left' });
    expect(wrapper.find('[data-id="drawer-container"]').at(0)).toHaveStyleRule('left', '0');
    expect(wrapper.find('[data-id="drawer-container"]').at(0)).toHaveStyleRule('right', 'auto');
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
    global.mountStyled(<Test />);
    expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
    expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
  });
});
