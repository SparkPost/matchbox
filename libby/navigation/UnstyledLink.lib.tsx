import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Stack, UnstyledLink } from '@sparkpost/matchbox';

const Test = (props: { children?: React.ReactNode; foo?: 'bar' | 'baz' }) => (
  <div>{props.children}</div>
);

describe('UnstyledLink', () => {
  add('with an onClick', () => (
    <UnstyledLink title="a title" onClick={() => console.log('click')}>
      A link
    </UnstyledLink>
  ));

  add('with an external link', () => (
    <UnstyledLink to="https://google.com" external>
      Google
    </UnstyledLink>
  ));

  add('wrapper components', () => {
    return (
      <>
        <UnstyledLink as={Test} foo="bar">
          A component
        </UnstyledLink>
        <UnstyledLink as="button">A button</UnstyledLink>
      </>
    );
  });

  add('disabled', () => (
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
  ));

  add('text props', () => (
    <>
      <UnstyledLink mr={400} color="purple.600" to="https://google.com" external>
        A link
      </UnstyledLink>
      <UnstyledLink mr={400} color="green.700">
        A link
      </UnstyledLink>
    </>
  ));
});
