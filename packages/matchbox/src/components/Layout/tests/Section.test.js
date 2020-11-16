import React from 'react';
import 'jest-styled-components';

import Layout from '../Layout';

describe('Layout', () => {
  const subject = () =>
    global.mountStyled(
      <Layout>
        <Layout.Section data-id="test-id">Two Column Layout</Layout.Section>
        <Layout.Section>Two Column Layout</Layout.Section>
      </Layout>,
    );

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });

  it('renders columns', () => {
    const wrapper = subject();

    expect(wrapper.text()).toEqual('Two Column LayoutTwo Column Layout');
  });

  it('renders annotated columns', () => {
    const wrapper = global.mountStyled(
      <Layout>
        <Layout.Section annotated>Annotated</Layout.Section>
        <Layout.Section>Column</Layout.Section>
      </Layout>,
    );

    expect(wrapper.find('div').at(2)).toHaveStyleRule('width', `100%`);
  });
});
