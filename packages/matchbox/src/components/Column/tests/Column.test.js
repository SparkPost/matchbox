import React from 'react';
import { render } from 'test-utils';
import Column from '../Column';
import { Columns } from '../../Columns';
import { tokens } from '@sparkpost/design-tokens';

describe('Columns', () => {
  const subject = (props) =>
    render(
      <Columns>
        <Column {...props}>Column 1</Column>
        <Column {...props}>Column 2</Column>
      </Columns>,
    ).container;

  it('defaults to fluid width', () => {
    const wrapper = subject();

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('flex', '1');
    expect(wrapper.querySelectorAll('div')[3]).toHaveStyleRule('flex', '1');
  });

  it('defaults space to 500', () => {
    const wrapper = subject();

    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule(
      'margin-left',
      `-${tokens.spacing_500}`,
    );
    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('margin-left', tokens.spacing_500);
    expect(wrapper.querySelectorAll('div')[3]).toHaveStyleRule('margin-left', tokens.spacing_500);
  });

  it('renders content width', () => {
    const wrapper = render(
      <Columns>
        <Column width="content">Column 1</Column>
        <Column>Column 2</Column>
      </Columns>,
    ).container;

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('width', 'auto');
    expect(wrapper.querySelectorAll('div')[3]).toHaveStyleRule('flex', '1');
  });

  it('renders width with styled system math', () => {
    const wrapper = render(
      <Columns>
        <Column width={1 / 6}>Column 1</Column>
        <Column width={2 / 6}>Column 2</Column>
        <Column width={3 / 6}>Column 3</Column>
      </Columns>,
    ).container;

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('width', `${100 * (1 / 6)}%`);
    expect(wrapper.querySelectorAll('div')[3]).toHaveStyleRule('width', `${100 * (2 / 6)}%`);
    expect(wrapper.querySelectorAll('div')[4]).toHaveStyleRule('width', `${100 * (3 / 6)}%`);
  });

  it('accepts a passed in className', () => {
    const wrapper = subject({ className: 'foo' });

    expect(wrapper.querySelector('.foo')).toBeInTheDocument();
  });

  it('accepts passed the passed in `display` prop', () => {
    const wrapper = render(
      <Columns>
        <Column display="none" />
      </Columns>,
    ).container;

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('display', 'none');
  });
});
