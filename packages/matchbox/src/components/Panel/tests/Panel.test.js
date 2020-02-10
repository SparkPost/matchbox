import React from 'react';
import Panel from '../Panel';
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
    expect(PanelWrapper.find('.HeaderText').text()).toEqual('test title');
    expect(PanelWrapper.find('.Accent.accent-orange')).toExist();
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
        .find('.SectionContent')
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
        .find('.SectionContent')
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
        .find('.Left')
        .children()
        .html(),
    ).toEqual('<span>left</span>');
    expect(wrapper.find('.Right').text()).toEqual('right');
  });
});
