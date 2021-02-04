import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Skeleton, Stack, Panel } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Skeleton',
};

const info = { propTablesExclude: [Stack] };

export const AsAHeading = withInfo(info)(() => (
  <Stack>
    <Skeleton.Header looksLike="h1" />
    <Skeleton.Header looksLike="h2" />
    <Skeleton.Header looksLike="h3" />
    <Skeleton.Header looksLike="h4" />
    <Skeleton.Header looksLike="h5" />
    <Skeleton.Header looksLike="h6" />
  </Stack>
));

export const AsABox = withInfo(info)(() => (
  <Stack>
    <Skeleton.Box size="5rem" />
    <Skeleton.Box width="20rem" height="8rem" />
    <Skeleton.Box size="7rem" borderRadius="circle" />
  </Stack>
));

export const AsBodyCopy = withInfo(info)(() => <Skeleton.Body />);

export const AllTogether = withInfo(info)(() => (
  <Stack>
    <Skeleton.Header looksLike="h1" />
    <Skeleton.Header looksLike="h6" width="800" />
    <Panel sectioned>
      <Stack>
        <Skeleton.Header looksLike="h5" />
        <Skeleton.Body lines={2} />
      </Stack>
    </Panel>
    <Panel sectioned>
      <Stack>
        <Skeleton.Box size="3.5rem" borderRadius="circle" />
        <Skeleton.Body lines={8} />
      </Stack>
    </Panel>
  </Stack>
));
