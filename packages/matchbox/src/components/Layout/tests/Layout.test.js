import React from 'react';
import Layout from '../Layout';

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('Layout', () => {
  const subject = props =>
    global.mountStyled(
      <Layout {...props} data-id="test-id">
        <Layout.Section>Layout Section Content</Layout.Section>
      </Layout>,
    );

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });

  it('renders layout with content', () => {
    const wrapper = subject();

    expect(wrapper.text()).toEqual('Layout Section Content');
  });

  it('renders default collapseBelow prop', () => {
    resizeWindow(500, 500);

    const wrapper = subject();
    expect(wrapper.find('div').at(1)).toHaveStyleRule('flex-wrap', 'wrap');
  });
});
