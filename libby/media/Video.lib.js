import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Video } from '@sparkpost/matchbox';
import Analytics from '@sparkpost/matchbox-media/videos/Analytics.webm';
import Analytics2 from '@sparkpost/matchbox-media/videos/Analytics.mp4';

describe('Video', () => {
  add('basic usage', () => (
    <Video>
      <Video.Source src={Analytics} type="video/webm" />
      <Video.Source src={Analytics2} type="video/mp4" />
    </Video>
  ));

  add('with controls and loop', () => (
    <Video controls={true} loop={true}>
      <Video.Source src={Analytics} type="video/webm" />
      <Video.Source src={Analytics2} type="video/mp4" />
    </Video>
  ));

  add('with system props', () => (
    <Video mt={500} width={['200px', null, '400px', '800px']}>
      <Video.Source src={Analytics} type="video/webm" />
      <Video.Source src={Analytics2} type="video/mp4" />
    </Video>
  ));
});
