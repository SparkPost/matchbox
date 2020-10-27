import React from 'react';
import Columns from '../Columns';
import { Column } from '../../Column';
import 'jest-styled-components';

import { tokens } from '@sparkpost/design-tokens';

describe('Columns', () => {
  const subject = props =>
    global.mountStyled(
      <Columns {...props} data-id="test-id">
        <Column width={1 / 2}>Column 1</Column>
        <Column width={1 / 2}>Column 2</Column>
      </Columns>,
    );

  const resizeWindow = (x, y) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
  };

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });

  it('renders with default props', () => {
    const wrapper = subject();
    expect(wrapper.find('div').at(1)).toHaveStyleRule('display', 'flex');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('flex-wrap', 'nowrap');
  });

  it('renders system props', () => {
    const wrapper = subject({ margin: tokens.spacing_200 });
    expect(wrapper.find('div').at(0)).toHaveStyleRule('margin', tokens.spacing_200);
  });

  it('renders column space', () => {
    const wrapper = subject({ space: 400 });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('margin-left', `-${tokens.spacing_400}`);
    expect(wrapper.find('div').at(2)).toHaveStyleRule('margin-left', tokens.spacing_400);
  });

  it('renders with correct alignment', () => {
    const wrapper = subject({ align: 'right', alignY: 'center' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('align-items', 'center');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('reverses row', () => {
    const wrapper = subject({ reverse: true });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('flex-direction', 'row-reverse');
  });

  it('collapses columns with collapseBelow', () => {
    const fullWidthWrapper = subject({ collapseBelow: 'sm' });
    expect(fullWidthWrapper.find('div').at(2)).toHaveStyleRule('width', '50%');
    expect(fullWidthWrapper.find('div').at(3)).toHaveStyleRule('width', '50%');

    resizeWindow(500, 500);
    const resizedWrapper = subject({ collapseBelow: 'sm' });
    expect(resizedWrapper.find('div').at(2)).toHaveStyleRule('width', '100%');
    expect(resizedWrapper.find('div').at(3)).toHaveStyleRule('width', '100%');
  });
});
