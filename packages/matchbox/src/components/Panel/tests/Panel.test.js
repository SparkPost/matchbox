import React from 'react';
import Panel from '../Panel';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Panel', () => {
  let wrapper;

  it('renders accent title and header action correctly', () => {
    wrapper = global.mountStyled(
      <Panel accent sectioned title="test title" actions={[{ content: 'Action' }]}>
        Foo
      </Panel>,
    );
    const PanelWrapper = wrapper;
    expect(
      PanelWrapper.find(Panel.Header)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('test title');
    expect(PanelWrapper.find(Panel.Accent)).toHaveStyleRule(
      'background-color',
      tokens.color_blue_700,
    );
    expect(PanelWrapper.find('Button').text()).toEqual('Action');
  });

  it('renders correctly with sections', () => {
    wrapper = global.mountStyled(
      <Panel>
        <Panel.Section actions={[{ content: 'Action' }]}>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>,
    );
    expect(
      wrapper
        .find(Panel.Section)
        .at(0)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('Foo');
    expect(
      wrapper
        .find(Panel.Section)
        .at(0)
        .find('Button')
        .text(),
    ).toEqual('Action');
    expect(
      wrapper
        .find(Panel.Section)
        .at(1)
        .find('div')
        .at(1)
        .text(),
    ).toEqual('Bar');
  });

  it('renders correctly with footer', () => {
    wrapper = global.mountStyled(
      <div>
        <Panel />
        <Panel.Footer left={<span>left</span>} right="right" />
      </div>,
    );
    expect(
      wrapper
        .find(Panel.Footer)
        .find('div')
        .at(3)
        .children()
        .html(),
    ).toEqual('<span>left</span>');
    expect(
      wrapper
        .find(Panel.Footer)
        .find('div')
        .at(5)
        .text(),
    ).toEqual('right');
  });
});
