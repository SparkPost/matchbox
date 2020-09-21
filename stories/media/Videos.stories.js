import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Box, Text } from '@sparkpost/matchbox';

import Video from '@sparkpost/matchbox-media/videos/Analytics.webm';
import Image from '@sparkpost/matchbox-media/videos/Analytics-LastFrame.png';

const VIDEOS_WEBM = {
  'Analytics.webm': require('@sparkpost/matchbox-media/videos/Analytics.webm'),
  'Analytics-Crop.webm': require('@sparkpost/matchbox-media/videos/Analytics-Crop.webm'),
  'Recipient-Validation.webm': require('@sparkpost/matchbox-media/videos/Recipient-Validation.webm'),
  'Recipient-Validation-Crop.webm': require('@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.webm'),
  'Signup.webm': require('@sparkpost/matchbox-media/videos/Signup.webm'),
  'Signup-Crop.webm': require('@sparkpost/matchbox-media/videos/Signup-Crop.webm'),
};

const VIDEOS_MP4 = {
  'Analytics.mp4': require('@sparkpost/matchbox-media/videos/Analytics.mp4'),
  'Analytics-Crop.mp4': require('@sparkpost/matchbox-media/videos/Analytics-Crop.mp4'),
  'Recipient-Validation.mp4': require('@sparkpost/matchbox-media/videos/Recipient-Validation.mp4'),
  'Recipient-Validation-Crop.mp4': require('@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.mp4'),
  'Signup.mp4': require('@sparkpost/matchbox-media/videos/Signup.mp4'),
  'Signup-Crop.mp4': require('@sparkpost/matchbox-media/videos/Signup-Crop.mp4'),
};

storiesOf('Media|Videos', module)
  .add(
    'single video',
    withInfo()(() => (
      <Box display="flex">
        <Box flex="1">
          <video width="100%" autoPlay muted>
            <source src={Video} type="video/webm" />
          </video>
        </Box>
        <Box flex="1" textAlign="center">
          <Box as="img" width="100%" src={Image} />
          <Text>Last Frame</Text>
        </Box>
      </Box>
    )),
  )

  .add(
    'all videos',
    withInfo()(() => (
      <>
        <Box mb="800">
          <Text as="h4">WebM</Text>
          {Object.keys(VIDEOS_WEBM).map(video => {
            return (
              <Box display="inline-block" width="33%" textAlign="center">
                <video width="100%" autoPlay muted>
                  <source src={VIDEOS_WEBM[video]} type="video/webm" />
                </video>
                <Text>{video}</Text>
              </Box>
            );
          })}
        </Box>
        <Box mb="800">
          <Text as="h4">MP4</Text>
          {Object.keys(VIDEOS_MP4).map(video => {
            return (
              <Box display="inline-block" width="33%" textAlign="center">
                <video width="100%" autoPlay muted>
                  <source src={VIDEOS_MP4[video]} type="video/webm" />
                </video>
                <Text>{video}</Text>
              </Box>
            );
          })}
        </Box>
      </>
    )),
  );
