import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { UnstyledLink, Stack } from '@sparkpost/matchbox';

export default {
  title: 'Navigation|UnstyledLink',
};

function DemoWrapper(props) {
  return <a>{props.children}</a>;
}

export const WithAnOnClickAction = () => (
  <UnstyledLink onClick={() => console.log('click')}>A link</UnstyledLink>
);

export const WithAnExternalLink = withInfo()(() => (
  <UnstyledLink to="https://google.com" external>
    Google
  </UnstyledLink>
));

export const WithWrapperComponents = withInfo()(() => (
  <>
    <UnstyledLink as={({ children }) => <a>{children}</a>}>A Function</UnstyledLink>
    <UnstyledLink as={DemoWrapper}>A Component</UnstyledLink>
  </>
));

export const Disabled = () => (
  <Stack>
    <UnstyledLink disabled>Disabled Link without href</UnstyledLink>
    <UnstyledLink disabled to="#">
      Disabled Link with href
    </UnstyledLink>
    <UnstyledLink disabled onClick={() => console.log('i should not be clickable')}>
      Disabled Link with onClick
    </UnstyledLink>
    <UnstyledLink disabled to="#" onClick={() => console.log('i should not be clickable')}>
      Disabled Link with onClick and href
    </UnstyledLink>
  </Stack>
);

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
