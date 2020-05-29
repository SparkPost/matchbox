import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Columns } from '@sparkpost/matchbox/components/Columns';
import { Column } from '@sparkpost/matchbox/components/Column';

export default {
  title: 'Layout|Columns',
};

export const Default = withInfo()(() => (
  <Columns space="800">
    <Column>Column 1</Column>
    <Column>Column 2</Column>
  </Columns>
));
