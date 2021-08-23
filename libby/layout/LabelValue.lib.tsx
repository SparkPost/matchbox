import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, LabelValue } from '@sparkpost/matchbox';

describe('LabelValue', () => {
  add('default, vertical orientation', () => (
    <LabelValue>
      <LabelValue.Label>Label</LabelValue.Label>
      <LabelValue.Value>Just a LabelValue</LabelValue.Value>
    </LabelValue>
  ));
  add('horizontal orientation', () => (
    <LabelValue orientation="horizontal">
      <LabelValue.Label>Label</LabelValue.Label>
      <LabelValue.Value>Just a LabelValue</LabelValue.Value>
    </LabelValue>
  ));

  add('horizontal orientation with wrapping', () => (
    <LabelValue orientation="horizontal">
      <LabelValue.Label>Label with wrapping behavior</LabelValue.Label>
      <LabelValue.Value>
        <div>Just a LabelValue</div>
        <div>Just a LabelValue</div>
      </LabelValue.Value>
    </LabelValue>
  ));

  add('inverted appearance', () => (
    <Box bg="gray.900" p="500">
      <LabelValue appearance="inverted">
        <LabelValue.Label>Label</LabelValue.Label>
        <LabelValue.Value>Inverted LabelValue</LabelValue.Value>
      </LabelValue>
    </Box>
  ));

  add('system props', () => (
    <LabelValue mx="600" my="800">
      <LabelValue.Label>Label</LabelValue.Label>
      <LabelValue.Value>
        <div>Just a LabelValue</div>
      </LabelValue.Value>
    </LabelValue>
  ));
});
