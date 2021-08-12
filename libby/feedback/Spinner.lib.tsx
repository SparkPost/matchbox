import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { Box } from '@sparkpost/matchbox';
import { Spinner } from '../../packages/matchbox/src';

describe('Spinner', () => {
  add('colors', () => (
    <Box display="flex" alignItems="center">
      <Spinner label="loading" />
      <Spinner color="orange" label="loading" />
      <Spinner color="gray" label="loading" />
      <Box bg="blue.700">
        <Spinner color="white" label="loading" />
      </Box>
    </Box>
  ));

  add('sizes', () => (
    <Box display="flex" alignItems="center">
      <Spinner size="large" label="loading" />
      <Spinner size="medium" label="loading" />
      <Spinner size="small" label="loading" />
    </Box>
  ));

  add('rotation only', () => (
    <Box display="flex" alignItems="center">
      <Spinner size="large" label="loading" rotationOnly />
      <Spinner size="medium" label="loading" rotationOnly />
      <Spinner size="small" label="loading" rotationOnly />
    </Box>
  ));

  add('system props', () => (
    <>
      <Spinner size="large" height={['10rem', null, null, '14rem']} label="loading" />
      <Spinner mb={400} color="orange" label="loading" />
      <Spinner ml={300} size="small" color="gray" label="loading" />
    </>
  ));
});
