import React from 'react';
import { render } from 'test-utils';
import Layout from '../Layout';

describe('Layout', () => {
  const subject = () =>
    render(
      <Layout>
        <Layout.Section data-id="test-id">Two Column Layout</Layout.Section>
        <Layout.Section>Two Column Layout</Layout.Section>
      </Layout>,
    ).container;

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
  });

  it('renders columns', () => {
    const wrapper = subject();

    expect(wrapper.textContent).toEqual('Two Column LayoutTwo Column Layout');
  });

  it('renders annotated columns', () => {
    const wrapper = render(
      <Layout>
        <Layout.Section annotated>Annotated</Layout.Section>
        <Layout.Section>Column</Layout.Section>
      </Layout>,
    ).container;

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('width', `100%`);
  });
});
