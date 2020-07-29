import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Box, Text } from '@sparkpost/matchbox';

import Video from '@sparkpost/matchbox-media/videos/analytics_169_webm.webm';

const VIDEOS_WEBM = {
  'analytics_169_webm.webm': require('@sparkpost/matchbox-media/videos/analytics_169_webm.webm'),
  'analytics_crop_webm.webm': require('@sparkpost/matchbox-media/videos/analytics_crop_webm.webm'),
  'recipient_validation_169_webm.webm': require('@sparkpost/matchbox-media/videos/recipient_validation_169_webm.webm'),
  'recipient_validation_crop_webm.webm': require('@sparkpost/matchbox-media/videos/recipient_validation_crop_webm.webm'),
  'signup_169_webm.webm': require('@sparkpost/matchbox-media/videos/signup_169_webm.webm'),
};

const VIDEOS_MP4 = {
  'analytics_169_h264.mp4': require('@sparkpost/matchbox-media/videos/analytics_169_h264.mp4'),
  'analytics_crop_h264.mp4': require('@sparkpost/matchbox-media/videos/analytics_crop_h264.mp4'),
  'recipient_validation_169_h264.mp4': require('@sparkpost/matchbox-media/videos/recipient_validation_169_h264.mp4'),
  'recipient_validation_crop_h264.mp4': require('@sparkpost/matchbox-media/videos/recipient_validation_crop_h264.mp4'),
  'signup_169_h264.mp4': require('@sparkpost/matchbox-media/videos/signup_169_h264.mp4'),
  'signup_crop_h264.mp4': require('@sparkpost/matchbox-media/videos/signup_crop_h264.mp4'),
};

storiesOf('Media|Video', module)
  .add(
    'single video',
    withInfo()(() => (
      <video width="800px" autoPlay muted>
        <source src={Video} type="video/webm" />
      </video>
    )),
  )

  .add(
    'all video',
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
