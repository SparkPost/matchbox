import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Error } from '@sparkpost/matchbox';

describe('Error Label', () => {
  add('with children as label', () => {
    return <Error>I am an error</Error>;
  });

  add('with error as label', () => {
    return <Error error="I am an error" />;
  });

  add('with system props', () => {
    return <Error ml="200">I am an error</Error>;
  });
});
