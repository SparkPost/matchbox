import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Columns } from '@sparkpost/matchbox/components/Columns';

export default {
  title: 'Layout|Columns',
};

export const Default = withInfo()(() => (
  <Columns>
    <Columns.Column>Column 1</Columns.Column>
    <Columns.Column>Column 2</Columns.Column>
  </Columns>
));
