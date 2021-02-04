import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Picture } from '@sparkpost/matchbox/components/Picture';
import { Box } from '@sparkpost/matchbox/components/Box';
import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';

export default {
  title: 'media|Picture',
};

export const BasicImage = withInfo({ propTables: [Picture] })(() => (
  <Picture>
    <Picture.Image src={Image} />
  </Picture>
));

export const MultiplyBackground = withInfo({ propTables: [Picture] })(() => (
  <Box bg="blue.100">
    <Picture seeThrough>
      <Picture.Image src={Image} />
    </Picture>
  </Box>
));

export const SystemProps = withInfo({ propTables: [Picture] })(() => (
  <Picture mx="500" width={['200px', '400px', '500px', '600px']} role="presentation">
    <Picture.Image src={Image} />
  </Picture>
));
