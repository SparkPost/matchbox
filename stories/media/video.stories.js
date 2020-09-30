import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Video } from '@sparkpost/matchbox';
import Analytics from '@sparkpost/matchbox-media/videos/Analytics.webm';
import Analytics2 from '@sparkpost/matchbox-media/videos/Analytics.mp4';

export default {
  title: 'media|Video',
};

export const BasicVideo = withInfo({ propTables: [Video] })(() => (
  <Video>
    <Video.Source src={Analytics} type="video/webm" />
    <Video.Source src={Analytics2} type="video/mp4" />
  </Video>
));

export const WithControlsAndLoop = withInfo({ propTables: [Video] })(() => (
  <Video controls={true} loop={true}>
    <Video.Source src={Analytics} type="video/webm" />
    <Video.Source src={Analytics2} type="video/mp4" />
  </Video>
));

export const SystemProps = withInfo({ propTables: [Video] })(() => (
  <Video mt={500} width={['200px', null, '400px', '800px']}>
    <Video.Source src={Analytics} type="video/webm" />
    <Video.Source src={Analytics2} type="video/mp4" />
  </Video>
));
