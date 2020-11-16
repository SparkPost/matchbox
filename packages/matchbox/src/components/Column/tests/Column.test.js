import React from 'react';
import Column from '../Column';
import { Columns } from '../../Columns';
import { tokens } from '@sparkpost/design-tokens';

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

    expect(wrapper.find('div').at(2)).toHaveStyleRule('flex', '1');
    expect(wrapper.find('div').at(3)).toHaveStyleRule('flex', '1');
  });

  it('defaults space to 500', () => {
    const wrapper = subject();

    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', `-${tokens.spacing_500}`);
    expect(wrapper.find('div').at(2)).toHaveStyleRule('margin-left', tokens.spacing_500);
    expect(wrapper.find('div').at(3)).toHaveStyleRule('margin-left', tokens.spacing_500);
  });

  it('renders content width', () => {
    const wrapper = global.mountStyled(
      <Columns>
        <Column width="content">Column 1</Column>
        <Column>Column 2</Column>
      </Columns>,
    );

    expect(wrapper.find('div').at(2)).toHaveStyleRule('width', 'auto');
    expect(wrapper.find('div').at(3)).toHaveStyleRule('flex', '1');
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

  it('accepts a passed in className', () => {
    const wrapper = subject({ className: 'foo' });

    expect(wrapper.find('.foo')).toExist();
  });

  it('accepts passed the passed in `display` prop', () => {
    const wrapper = global.mountStyled(
      <Columns>
        <Column display="none" />
      </Columns>,
    );

    expect(wrapper.find('div').at(2)).toHaveStyleRule('display', 'none');
  });
});
