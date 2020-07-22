import React from 'react';
import 'jest-styled-components';
import { tokens } from '@sparkpost/design-tokens';

import Layout from '../Layout';

describe('Layout', () => {
  const subject = () =>
    global.mountStyled(
      <Layout>
        <Layout.Section>Layout Section Content</Layout.Section>
      </Layout>,
    );

  it('renders layout with content', () => {
    const wrapper = subject();

    expect(wrapper.text()).toEqual('Layout Section Content');
  });

  it('renders layout styles correctly', () => {
    const wrapper = subject();

    expect(wrapper.find('div').at(0)).toHaveStyleRule('display', 'flex');
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin-left', `-${tokens.spacing_500}`);
    expect(wrapper.find('div').at(0)).toHaveStyleRule('flex-wrap', 'wrap');
  });
});
