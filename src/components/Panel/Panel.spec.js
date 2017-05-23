import React from 'react';
import renderer from 'react-test-renderer';

import Panel from './Panel';

describe('snapshot tests', () => {

  test('Panel will render correctly with all options', () => {
    expect(renderer.create(
      <Panel>Foo</Panel>
    )).toMatchSnapshot();
  });

});
