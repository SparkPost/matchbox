import React from 'react';
import Panel from '../Panel';
import { mount } from 'enzyme';

describe('Panel', () => {
  let wrapper;

  it('renders correctly', () => {
    wrapper = mount(
      <Panel accent sectioned title='title' actions={[{ content: 'Action' }]}>
        Foo
      </Panel>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with sections', () => {
    expect(mount(
      <Panel title='title'>
        <Panel.Section actions={[{ content: 'Action' }]}>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>
    )).toMatchSnapshot();
  });

  it('renders correctly with footer', () => {
    expect(mount(
      <div>
        <Panel accent='red' />
        <Panel.Footer left={<span>left</span>} right='right' />
      </div>
    )).toMatchSnapshot();
  });
});
