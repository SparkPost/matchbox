import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

import { ProgressBar } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Feedback|ProgressBar',
};

export const Default = withInfo()(() => (
  <div>
    <ProgressBar completed={54} mb={400} />
    <ProgressBar completed={82} size="small" />
  </div>
));
