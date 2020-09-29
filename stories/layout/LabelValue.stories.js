import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { LabelValue } from '@sparkpost/matchbox/components/LabelValue';

export default {
  title: 'Layout|LabelValue',
};

export const VerticalOrientation = withInfo()(() => (
  <LabelValue label="Label">Just a LabelValue</LabelValue>
));
export const HorizontalOrientation = withInfo()(() => (
  <LabelValue orientation="horizontal" label="Label">
    Just a LabelValue
  </LabelValue>
));

export const HorizontalWithWrapping = withInfo()(() => (
  <LabelValue orientation="horizontal" label="Label with wrapping behavior">
    <div>Just a LabelValue</div>
    <div>Just a LabelValue</div>
  </LabelValue>
));

export const SystemProps = withInfo()(() => (
  <LabelValue label="Label" mx="600" my="800">
    <div>Just a LabelValue</div>
  </LabelValue>
));
