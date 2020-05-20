import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Spinner } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Spinner',
};

export const Default = withInfo()(() => (
  <div>
    <Spinner label="loading" />
  </div>
));
