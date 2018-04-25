import React from 'react';
import renderer from 'react-test-renderer';

import Panel from '../Panel';

describe('snapshot tests', () => {

  test('Panel will render correctly with all options', () => {
    const tree = renderer.create(
      <Panel accent sectioned title='title'>Foo</Panel>
    );
    expect(tree).toMatchSnapshot();
  });

  test('Panel will render correctly with sections', () => {
    const tree = renderer.create(
      <Panel sectioned>
        <Panel.Section>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>
    );
    expect(tree).toMatchSnapshot();
  });

});
