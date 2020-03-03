import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { action } from '@storybook/addon-actions';

import { Pager } from '@sparkpost/matchbox';

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
