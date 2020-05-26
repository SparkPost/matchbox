import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { ProgressBar } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|ProgressBar',
};

export const Default = withInfo()(() => (
  <div>
    <ProgressBar completed={54} mb={400} />
    <ProgressBar completed={82} size="small" />
  </div>
));
