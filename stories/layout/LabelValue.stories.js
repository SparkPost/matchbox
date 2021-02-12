import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { LabelValue } from '@sparkpost/matchbox/components/LabelValue';
import { Box } from '@sparkpost/matchbox/components/Box';

export default {
  title: 'Layout|LabelValue',
};

export const VerticalOrientation = withInfo()(() => (
  <LabelValue>
    <LabelValue.Label>Label</LabelValue.Label>
    <LabelValue.Value>Just a LabelValue</LabelValue.Value>
  </LabelValue>
));
export const HorizontalOrientation = withInfo()(() => (
  <LabelValue orientation="horizontal">
    <LabelValue.Label>Label</LabelValue.Label>
    <LabelValue.Value>Just a LabelValue</LabelValue.Value>
  </LabelValue>
));

export const HorizontalWithWrapping = withInfo()(() => (
  <LabelValue orientation="horizontal">
    <LabelValue.Label>Label with wrapping behavior</LabelValue.Label>
    <LabelValue.Value>
      <div>Just a LabelValue</div>
      <div>Just a LabelValue</div>
    </LabelValue.Value>
  </LabelValue>
));

export const InvertedAppearance = withInfo()(() => (
  <Box bg="gray.900" p="500">
    <LabelValue appearance="inverted">
      <LabelValue.Label>Label</LabelValue.Label>
      <LabelValue.Value>Inverted LabelValue</LabelValue.Value>
    </LabelValue>
  </Box>
));

export const SystemProps = withInfo()(() => (
  <LabelValue mx="600" my="800">
    <LabelValue.Label>Label</LabelValue.Label>
    <LabelValue.Value>
      <div>Just a LabelValue</div>
    </LabelValue.Value>
  </LabelValue>
));
