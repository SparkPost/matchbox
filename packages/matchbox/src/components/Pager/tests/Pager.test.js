import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import Pager from '../Pager';

describe('Pager', () => {
  const subject = () =>
    global.mountStyled(
      <Pager mb="400" id="test-id" data-id="data-test-id">
        <Pager.Previous />
        <Pager.Next />
      </Pager>,
    );

  it('renders pager with buttons', () => {
    expect(subject().find(Pager.Previous)).toExist();
    expect(subject().find(Pager.Next)).toExist();
    expect(subject().find('#test-id')).toExist();
    expect(subject().find('[data-id="data-test-id"]')).toExist();
  });

  it('renders pager styles', () => {
    expect(subject()).toHaveStyleRule('display', 'inline-block');
    expect(subject()).toHaveStyleRule('margin-bottom', tokens.spacing_400);
  });
});
