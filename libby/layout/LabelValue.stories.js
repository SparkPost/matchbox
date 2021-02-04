import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { LabelValue } from '@sparkpost/matchbox/components/LabelValue';

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

export const SystemProps = withInfo()(() => (
  <LabelValue mx="600" my="800">
    <LabelValue.Label>Label</LabelValue.Label>
    <LabelValue.Value>
      <div>Just a LabelValue</div>
    </LabelValue.Value>
  </LabelValue>
));
