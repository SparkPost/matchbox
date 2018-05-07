import React from 'react';
import Panel from '../Panel';
import { shallow } from 'enzyme';

describe('Panel', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Panel accent sectioned title='title'>Foo</Panel>
    )).toMatchSnapshot();
  });

  it('renders correctly with sections', () => {
    expect(shallow(
      <Panel sectioned>
        <Panel.Section>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>
    )).toMatchSnapshot();
  });
});
