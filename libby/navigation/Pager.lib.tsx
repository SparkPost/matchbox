import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Pager } from '@sparkpost/matchbox';

describe('Pager', () => {
  add('basic usage', () => (
    <Pager>
      <Pager.Previous />
      <Pager.Next />
    </Pager>
  ));

  add('disabled', () => (
    <Pager>
      <Pager.Previous disabled />
      <Pager.Next disabled />
    </Pager>
  ));

  add('styles', () => (
    <>
      <Box mb={400}>
        <Pager>
          <Pager.Previous color="blue" outline />
          <Pager.Next color="blue" outline />
        </Pager>
      </Box>
      <Box mb={400}>
        <Pager>
          <Pager.Previous color="red" flat />
          <Pager.Next color="red" flat />
        </Pager>
      </Box>
      <Box mb={400}>
        <Pager>
          <Pager.Previous size="large" />
          <Pager.Next size="large" />
        </Pager>
      </Box>
      <Box mb={400}>
        <Pager>
          <Pager.Previous color="blue" size="small" />
          <Pager.Next color="blue" size="small" />
        </Pager>
      </Box>
    </>
  ));

  add('system props', () => (
    <>
      <Box>
        <Pager mb={800}>
          <Pager.Previous mr="200" />
          <Pager.Next color="blue" mr="200" />
          <Pager.Next color="blue" mr="400" />
          <Pager.Next color="blue" mr="600" />
          <Pager.Next flat color="blue" />
        </Pager>
      </Box>
    </>
  ));
});
