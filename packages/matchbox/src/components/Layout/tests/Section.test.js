import React from 'react';
import 'jest-styled-components';

import Layout from '../Layout';

describe('Layout', () => {
  const subject = () =>
    global.mountStyled(
      <Layout>
        <Layout.Section variant="oneColumn">One Column Layout</Layout.Section>
        <Layout.Section variant="twoColumn">Two Column Layout</Layout.Section>
        <Layout.Section variant="twoColumn">Two Column Layout</Layout.Section>
        <Layout.Section variant="annotatedLeft">Annotated Layout</Layout.Section>
        <Layout.Section variant="annotatedRight">Annotated Layout</Layout.Section>
      </Layout>,
    );

  it('renders one column section', () => {
    const wrapper = subject();

    expect(wrapper.find('div').at(1)).toHaveStyleRule('width', '100%');
  });

  it('renders two column section', () => {
    const wrapper = subject();

    expect(
      wrapper
        .find('div')
        .at(2)
        .text(),
    ).toEqual('Two Column Layout');
    expect(
      wrapper
        .find('div')
        .at(3)
        .text(),
    ).toEqual('Two Column Layout');
  });

  it('renders annotated section', () => {
    const wrapper = subject();

    expect(
      wrapper
        .find('div')
        .at(4)
        .text(),
    ).toEqual('Annotated Layout');
    expect(
      wrapper
        .find('div')
        .at(5)
        .text(),
    ).toEqual('Annotated Layout');
  });
});
