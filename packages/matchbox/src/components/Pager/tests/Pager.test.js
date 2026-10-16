import React from 'react';
import { render } from 'test-utils';
import { tokens } from '@sparkpost/design-tokens';
import Pager from '../Pager';

describe('Pager', () => {
  const subject = () =>
    render(
      <Pager mb="400" id="test-id" data-id="data-test-id">
        <Pager.Previous />
        <Pager.Next />
      </Pager>,
    ).container;

  it('renders pager with buttons', () => {
    const wrapper = subject();
    expect(wrapper.querySelectorAll('button')[0]).toHaveTextContent('Previous');
    expect(wrapper.querySelectorAll('button')[1]).toHaveTextContent('Next');
    expect(subject().querySelector('#test-id')).toBeInTheDocument();
    expect(subject().querySelector('[data-id="data-test-id"]')).toBeInTheDocument();
  });

  it('renders pager styles', () => {
    expect(subject().firstChild).toHaveStyleRule('display', 'inline-block');
    expect(subject().firstChild).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });
});
