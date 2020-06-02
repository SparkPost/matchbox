import React from 'react';
import Column from '../Column';
import { Columns } from '../../Columns';
import 'jest-styled-components';

describe('Columns', () => {
  const subject = props =>
    global.mountStyled(
      <Columns>
        <Column {...props}>Column 1</Column>
        <Column {...props}>Column 2</Column>
      </Columns>,
    );

  it('defaults to fluid width', () => {
    const wrapper = subject();

    expect(wrapper.find('div').at(2)).toHaveStyleRule('width', '100%');
    expect(wrapper.find('div').at(3)).toHaveStyleRule('width', '100%');
  });

  it('renders content width', () => {
    const wrapper = global.mountStyled(
      <Columns>
        <Column width="content">Column 1</Column>
        <Column>Column 2</Column>
      </Columns>,
    );

    expect(wrapper.find('div').at(2)).toHaveStyleRule('width', 'auto');
    expect(wrapper.find('div').at(3)).toHaveStyleRule('width', '100%');
  });

  it('renders width with styled system math', () => {
    const wrapper = global.mountStyled(
      <Columns>
        <Column width={1 / 6}>Column 1</Column>
        <Column width={2 / 6}>Column 2</Column>
        <Column width={3 / 6}>Column 3</Column>
      </Columns>,
    );

    expect(wrapper.find('div').at(2)).toHaveStyleRule('width', `${100 * (1 / 6)}%`);
    expect(wrapper.find('div').at(3)).toHaveStyleRule('width', `${100 * (2 / 6)}%`);
    expect(wrapper.find('div').at(4)).toHaveStyleRule('width', `${100 * (3 / 6)}%`);
  });
});
