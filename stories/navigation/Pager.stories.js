import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { action } from '@storybook/addon-actions';

import { Pager } from '@sparkpost/matchbox';
import { Box } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Navigation|Pager',
};

export const BasicPager = withInfo()(() => (
  <Pager>
    <Pager.Previous onClick={action('Previous Page')} />
    <Pager.Next onClick={action('Next Page')} />
  </Pager>
));

export const WithDisabledButtons = withInfo()(() => (
  <Pager>
    <Pager.Previous disabled onClick={action('Previous Page')} />
    <Pager.Next disabled onClick={action('Next Page')} />
  </Pager>
));

export const ButtonStyles = withInfo()(() => (
  <>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="blue" outline onClick={action('Previous Page')} />
        <Pager.Next color="blue" outline onClick={action('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="red" flat onClick={action('Previous Page')} />
        <Pager.Next color="red" flat onClick={action('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous size="large" onClick={action('Previous Page')} />
        <Pager.Next size="large" onClick={action('Next Page')} />
      </Pager>
    </Box>
    <Box mb={400}>
      <Pager>
        <Pager.Previous color="blue" size="small" onClick={action('Previous Page')} />
        <Pager.Next color="blue" size="small" onClick={action('Next Page')} />
      </Pager>
    </Box>
  </>
));

export const SystemProps = withInfo()(() => (
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
