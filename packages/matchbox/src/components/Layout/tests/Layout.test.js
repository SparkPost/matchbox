import React from 'react';
import { render } from 'test-utils';
import Layout from '../Layout';

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('Layout', () => {
  const subject = (props) =>
    render(
      <Layout {...props} data-id="test-id">
        <Layout.Section>Layout Section Content</Layout.Section>
      </Layout>,
    ).container;

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
  });

  it('renders layout with content', () => {
    const wrapper = subject();

    expect(wrapper.textContent).toEqual('Layout Section Content');
  });

  it('renders default collapseBelow prop', () => {
    resizeWindow(500, 500);

    const wrapper = subject();
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('flex-wrap', 'wrap');
  });
});
