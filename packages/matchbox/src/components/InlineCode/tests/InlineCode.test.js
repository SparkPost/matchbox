import React from 'react';
import { render } from 'test-utils';
import InlineCode from '../InlineCode';

describe('CodeBlock', () => {
  const subject = () => render(<InlineCode>The Code</InlineCode>).container;

  it('renders the passed in code', () => {
    const wrapper = subject();

    expect(wrapper).toHaveTextContent('The Code');
  });

  it('renders with appropriate semantic HTML elements', () => {
    const wrapper = subject();

    expect(wrapper.querySelectorAll('code')).toHaveLength(1);
  });
});
