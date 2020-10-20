import React from 'react';

import { Pager } from '@sparkpost/matchbox';
import { Box } from '@sparkpost/matchbox';

export default {
  title: 'Navigation/Pager',
};

export const BasicPager = () => (
  <Pager>
    <Pager.Previous onClick={() => console.log('Previous Page')} />
    <Pager.Next onClick={() => console.log('Next Page')} />
  </Pager>
);

export const WithDisabledButtons = () => (
  <Pager>
    <Pager.Previous disabled onClick={() => console.log('Previous Page')} />
    <Pager.Next disabled onClick={() => console.log('Next Page')} />
  </Pager>
);

export const ButtonStyles = () => (
  <>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="blue" outline onClick={() => console.log('Previous Page')} />
        <Pager.Next color="blue" outline onClick={() => console.log('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="red" flat onClick={() => console.log('Previous Page')} />
        <Pager.Next color="red" flat onClick={() => console.log('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous size="large" onClick={() => console.log('Previous Page')} />
        <Pager.Next size="large" onClick={() => console.log('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="blue" size="small" onClick={() => console.log('Previous Page')} />
        <Pager.Next color="blue" size="small" onClick={() => console.log('Next Page')} />
      </Pager>
    </Box>
  </>
);

export const SystemProps = () => (
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
);
