import React from 'react';
import { render } from 'test-utils';
import Error from '../Error';

describe('Error', () => {
  it('renders error message', () => {
    const wrapper = render(
      <Error error="Something terrible happened!" className="test-class" />,
    ).container;
    expect(wrapper.textContent).toEqual('Something terrible happened!');
    expect(wrapper.querySelector('svg')).toHaveAttributeValue('aria-label', 'Error');
    expect(wrapper.firstChild).toHaveClass('test-class');
    expect(wrapper.firstChild).toHaveAttributeValue('data-id', 'error-message');
  });
});
