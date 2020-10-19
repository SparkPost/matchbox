import React from 'react';
import { Picture } from '@sparkpost/matchbox/components/Picture';
import { Box } from '@sparkpost/matchbox/components/Box';
import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';

export default {
  title: 'Media/Picture',
};

export const BasicImage = () => (
  <Picture>
    <Picture.Image src={Image} />
  </Picture>
);

export const MultiplyBackground = () => (
  <Box bg="blue.100">
    <Picture seeThrough>
      <Picture.Image src={Image} />
    </Picture>
  </Box>
);

export const SystemProps = () => (
  <Picture mx="500" width={['200px', '400px', '500px', '600px']} role="presentation">
    <Picture.Image src={Image} />
  </Picture>
);
