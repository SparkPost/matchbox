import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Skeleton, Stack, Panel } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Skeleton',
};

export const AsAHeading = withInfo()(() => (
  <Stack>
    <Skeleton.Header looksLike="h1" />
    <Skeleton.Header looksLike="h2" />
    <Skeleton.Header looksLike="h3" />
    <Skeleton.Header looksLike="h4" />
    <Skeleton.Header looksLike="h5" />
    <Skeleton.Header looksLike="h6" />
  </Stack>
));

export const AsABox = withInfo()(() => (
  <Stack>
    <Skeleton.Box size="5rem" />
    <Skeleton.Box width="12rem" height="3rem" />
    <Skeleton.Box size="5rem" borderRadius="circle" />
  </Stack>
));

export const AsBodyCopy = withInfo()(() => <Skeleton.Body />);

export const AllTogether = withInfo()(() => (
  <Stack>
    <Skeleton.Header looksLike="h1" />
    <Skeleton.Header looksLike="h6" maxWidth="800" />
    <Panel sectioned>
      <Stack>
        <Skeleton.Header looksLike="h5" />
        <Skeleton.Body lines={2} />
      </Stack>
    </Panel>
    <Panel sectioned>
      <Stack>
        <Skeleton.Box size="3rem" borderRadius="circle" />
        <Skeleton.Body lines={4} />
      </Stack>
    </Panel>
  </Stack>
));
