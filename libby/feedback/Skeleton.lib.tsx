import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { Stack, Panel } from '@sparkpost/matchbox';
import { Skeleton } from '@sparkpost/matchbox';

describe('Skeleton', () => {
  add('heading', () => (
    <Stack>
      <Skeleton.Header looksLike="h1" data-id="test-id" />
      <Skeleton.Header looksLike="h2" />
      <Skeleton.Header looksLike="h3" />
      <Skeleton.Header looksLike="h4" />
      <Skeleton.Header looksLike="h5" />
      <Skeleton.Header looksLike="h6" />
    </Stack>
  ));

  add('box', () => (
    <Stack>
      <Skeleton.Box size="5rem" data-id="test-id" />
      <Skeleton.Box width="20rem" height="8rem" />
      <Skeleton.Box size="7rem" borderRadius="circle" />
    </Stack>
  ));

  add('body', () => <Skeleton.Body data-id="test-id" />);

  add('all together', () => (
    <div id="test">
      <Stack>
        <Skeleton.Header looksLike="h1" />
        <Skeleton.Header looksLike="h6" width="800" />
        <Panel>
          <Panel.Section>
            <Stack>
              <Skeleton.Header looksLike="h5" />
              <Skeleton.Body lines={2} />
            </Stack>
          </Panel.Section>
        </Panel>
        <Panel>
          <Panel.Section>
            <Stack>
              <Skeleton.Box size="3.5rem" borderRadius="circle" />
              <Skeleton.Body lines={8} />
            </Stack>
          </Panel.Section>
        </Panel>
      </Stack>
    </div>
  ));
});
