import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Text, Video } from '@sparkpost/matchbox';

import Single from '@sparkpost/matchbox-media/videos/Analytics.webm';

import AnalyticsWebm from '@sparkpost/matchbox-media/videos/Analytics.webm';
import AnalyticsCropWebm from '@sparkpost/matchbox-media/videos/Analytics-Crop.webm';
import RecipientValidationWebm from '@sparkpost/matchbox-media/videos/Recipient-Validation.webm';
import RecipientValidationCropWebm from '@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.webm';
import SignupWebm from '@sparkpost/matchbox-media/videos/Signup.webm';
import SignupCropWebm from '@sparkpost/matchbox-media/videos/Signup-Crop.webm';

import AnalyticsMp4 from '@sparkpost/matchbox-media/videos/Analytics.mp4';
import AnalyticsCropMp4 from '@sparkpost/matchbox-media/videos/Analytics-Crop.mp4';
import RecipientValidationMp4 from '@sparkpost/matchbox-media/videos/Recipient-Validation.mp4';
import RecipientValidationCropMp4 from '@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.mp4';
import SignupMp4 from '@sparkpost/matchbox-media/videos/Signup.mp4';
import SignupCropMp4 from '@sparkpost/matchbox-media/videos/Signup-Crop.mp4';

const VIDEOS_WEBM = {
  'Analytics.webm': AnalyticsWebm,
  'Analytics-Crop.webm': AnalyticsCropWebm,
  'Recipient-Validation.webm': RecipientValidationWebm,
  'Recipient-Validation-Crop.webm': RecipientValidationCropWebm,
  'Signup.webm': SignupWebm,
  'Signup-Crop.webm': SignupCropWebm,
};

const VIDEOS_MP4 = {
  'Analytics.mp4': AnalyticsMp4,
  'Analytics-Crop.mp4': AnalyticsCropMp4,
  'Recipient-Validation.mp4': RecipientValidationMp4,
  'Recipient-Validation-Crop.mp4': RecipientValidationCropMp4,
  'Signup.mp4': SignupMp4,
  'Signup-Crop.mp4': SignupCropMp4,
};

describe('Video Assets', () => {
  add('single video', () => (
    <Video>
      <Video.Source src={Single} type="video/webm" />
    </Video>
  ));

  add('all videos', () => (
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
  ));
});

//   .add(
//     'all videos',
//     withInfo()(() => (

//     )),
//   );
