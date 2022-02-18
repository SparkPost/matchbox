import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { QueryCard, Stack } from '@sparkpost/matchbox';

describe('QueryCard', () => {
  add('renders correctly with all components', () => {
    return (
      <Stack>
        <QueryCard onClose={() => console.log('close')}>
          <QueryCard.Title>Subaccount</QueryCard.Title>
          <QueryCard.Operator>equals</QueryCard.Operator>
          <QueryCard.Subtitle>Bobs Subacount</QueryCard.Subtitle>
        </QueryCard>
        <QueryCard onClose={() => console.log('close')}>
          <QueryCard.Legend color="red.700" />
          <QueryCard.Title>Inbox Folder Rate</QueryCard.Title>
          <QueryCard.Subtitle>Weighted</QueryCard.Subtitle>
        </QueryCard>
        <QueryCard.Group>
          <QueryCard onClose={() => console.log('close')}>
            <QueryCard.Title>Subaccount</QueryCard.Title>
            <QueryCard.Operator>equals</QueryCard.Operator>
            <QueryCard.Subtitle>Bobs Subacount</QueryCard.Subtitle>
          </QueryCard>
          <QueryCard onClose={() => console.log('close')}>
            <QueryCard.Title>Subaccount</QueryCard.Title>
            <QueryCard.Operator>equals</QueryCard.Operator>
            <QueryCard.Subtitle>Bobs Subacount</QueryCard.Subtitle>
          </QueryCard>
        </QueryCard.Group>
        <QueryCard.Group>
          <QueryCard onClose={() => console.log('close')}>
            <QueryCard.Title>Subaccount</QueryCard.Title>
            <QueryCard.Operator>equals</QueryCard.Operator>
            <QueryCard.Subtitle>Bobs Subacount</QueryCard.Subtitle>
          </QueryCard>
        </QueryCard.Group>
      </Stack>
    );
  });
});
