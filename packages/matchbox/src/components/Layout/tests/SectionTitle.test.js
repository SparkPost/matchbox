import React from 'react';
import 'jest-styled-components';

import SectionTitle from '../SectionTitle';

describe('Layout', () => {
  const subject = () => global.mountStyled(<SectionTitle>The Title</SectionTitle>);

  it('renders section title', () => {
    const wrapper = subject();

    expect(wrapper.text()).toEqual('The Title');
  });
});
