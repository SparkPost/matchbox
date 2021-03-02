import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Picture } from '@sparkpost/matchbox/components/Picture';
import { Box } from '@sparkpost/matchbox/components/Box';
import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';

describe('Picture', () => {
  add('basic usage', () => (
    <Picture>
      <Picture.Image src={Image} />
    </Picture>
  ));
  add('multiply background', () => (
    <Box bg="blue.100">
      <Picture seeThrough>
        <Picture.Image src={Image} />
      </Picture>
    </Box>
  ));

  add('system props', () => (
    <Picture mx="500" width={['200px', '400px', '500px', '600px']} role="presentation">
      <Picture.Image src={Image} />
    </Picture>
  ));
});
