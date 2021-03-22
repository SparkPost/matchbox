import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Badge, Inline } from '@sparkpost/matchbox';

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
      <Badge my="600" bg="red">
        100
      </Badge>
    </>
  ));
});
