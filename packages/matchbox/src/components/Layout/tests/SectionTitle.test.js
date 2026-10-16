import React from 'react';
import { render } from 'test-utils';
import SectionTitle from '../SectionTitle';

describe('Layout', () => {
  const subject = () => render(<SectionTitle data-id="test-id">The Title</SectionTitle>).container;

  it('renders section title', () => {
    const wrapper = subject();

    expect(wrapper.textContent).toEqual('The Title');
  });

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.querySelector('[data-id="test-id"]')).toBeInTheDocument();
  });
});
