import React from 'react';
import InlineCode from '../InlineCode';
import 'jest-styled-components';

describe('CodeBlock', () => {
  const subject = () => global.mountStyled(<InlineCode>The Code</InlineCode>);

  it('renders the passed in code', () => {
    const wrapper = subject();

    expect(wrapper).toIncludeText('The Code');
  });

  it('renders with appropriate semantic HTML elements', () => {
    const wrapper = subject();

    expect(wrapper.find('code')).toHaveLength(1);
  });
});
