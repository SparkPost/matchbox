import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { UnstyledLink } from '@sparkpost/matchbox';

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
    <UnstyledLink component={({ children }) => <a>{children}</a>}>A Function</UnstyledLink>
    <UnstyledLink component={DemoWrapper}>A Component</UnstyledLink>
  </>
));

export const Disabled = withInfo()(() => <UnstyledLink disabled>Disabled Link</UnstyledLink>);

export const WithTextProps = withInfo()(() => (
  <>
    <UnstyledLink mr={400} color="purple.600" to="https://google.com" external>
      A link
    </UnstyledLink>
    <UnstyledLink mr={400} color="green.700">
      A link
    </UnstyledLink>
  </>
));
