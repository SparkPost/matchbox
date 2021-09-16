import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Badge, Inline, Tooltip } from '../../packages/matchbox/src';

describe('Badge', () => {
  add('default', () => <Badge>50</Badge>);
  add('colors', () => (
    <Inline>
      <Badge color="lightGray">100</Badge>
      <Badge color="darkGray">100</Badge>
      <Badge color="green">100</Badge>
      <Badge color="red">100</Badge>
      <Badge color="blue">100</Badge>
      <Badge color="white">100</Badge>
      <Badge color="black">100</Badge>
    </Inline>
  ));

  add('system props', () => (
    <>
      <Badge mx="600">100</Badge>
      <Badge my="600">100</Badge>
    </>
  ));

  add('e2e test', () => (
    <>
      <Badge mx="600" id="test-id" data-id="test-data-id">
        100
      </Badge>
      <Badge my="600" color="red" id="test-id-2">
        200
      </Badge>
    </>
  ));

  add('with a tooltip', () => (
    <Tooltip id="test-tooltip" content="I am a Tooltip">
      <Badge tabIndex={0} color="darkGray">
        100
      </Badge>
    </Tooltip>
  ));
});
