import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Popover, Button, Box, ActionList } from '@sparkpost/matchbox';

function noop() {
  return null;
}

describe('Visual Regression', () => {
  add('Popover and ActionList', () => (
    <Popover
      trigger={
        <Button id="trigger" aria-controls="menu">
          Popover
        </Button>
      }
    >
      <ActionList aria-labelledby="trigger" id="menu">
        <ActionList.Action onClick={noop} is="button">
          Button
        </ActionList.Action>
        <ActionList.Action onClick={noop} is="button" disabled>
          Disabled Button
        </ActionList.Action>
        <ActionList.Action is="link" href="#">
          Link
        </ActionList.Action>
        <ActionList.Section>
          <ActionList.Action is="link" href="#" disabled>
            Disabled Link
          </ActionList.Action>
        </ActionList.Section>
      </ActionList>
    </Popover>
  ));
});
