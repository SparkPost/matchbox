import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { action } from '@storybook/addon-actions';

import { UnstyledLink } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Navigation|UnstyledLink',
};

function DemoWrapper(props) {
  return <a>{props.children}</a>;
}

export const WithAnOnClickAction = withInfo()(() => (
  <UnstyledLink onClick={action('Handle Click')}>A link</UnstyledLink>
));

export const WithAnExternalLink = withInfo()(() => (
  <UnstyledLink to="https://google.com" external>
    Google
  </UnstyledLink>
));

export const WithWrapperComponents = withInfo()(() => (
  <>
    <UnstyledLink component="button">Any valid HTML tag</UnstyledLink>
    <UnstyledLink component={({ children }) => <a>{children}</a>}>A Function</UnstyledLink>
    <UnstyledLink component={DemoWrapper}>A Component</UnstyledLink>
  </>
));
