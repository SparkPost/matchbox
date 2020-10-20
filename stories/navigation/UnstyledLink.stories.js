import React from 'react';

import { UnstyledLink } from '@sparkpost/matchbox';

export default {
  title: 'Navigation/UnstyledLink',
};

function DemoWrapper(props) {
  return <a>{props.children}</a>;
}

export const WithAnOnClickAction = () => (
  <UnstyledLink onClick={() => console.log('Handle Click')}>A link</UnstyledLink>
);

export const WithAnExternalLink = () => (
  <UnstyledLink to="https://google.com" external>
    Google
  </UnstyledLink>
);

export const WithWrapperComponents = () => (
  <>
    <UnstyledLink component={({ children }) => <a>{children}</a>}>A Function</UnstyledLink>
    <UnstyledLink component={DemoWrapper}>A Component</UnstyledLink>
  </>
);

export const WithTextProps = () => (
  <>
    <UnstyledLink mr={400} color="purple.600" to="https://google.com" external>
      A link
    </UnstyledLink>
    <UnstyledLink mr={400} color="green.700">
      A link
    </UnstyledLink>
  </>
);
