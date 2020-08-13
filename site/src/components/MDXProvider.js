import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { SystemPropsTags } from './SystemProps';
import { Prop } from './Prop';
import TokenTable from './tokens/TokenTable';
import FilterableTokenTable from './tokens/FilterableTokenTable';
import Token from './tokens/Token';
import Heading from './Heading';
import ExternalLink from './ExternalLink';
import InlineCode from './InlineCode';
import Pre from './Pre';
import { Box } from '@sparkpost/matchbox';

const components = {
  a: props => <Link to={props.href}>{props.children}</Link>,
  ExternalLink,
  SystemPropsTags,
  TokenTable,
  FilterableTokenTable,
  Token,
  Prop,
  Heading,
  h1: props => <Heading as="h1" {...props} />,
  h2: props => <Heading as="h2" {...props} />,
  h3: props => <Heading as="h3" {...props} />,
  h4: props => <Heading as="h4" {...props} />,
  h5: props => <Heading as="h5" {...props} />,
  Link,
  inlineCode: InlineCode,
  pre: Pre,
  Box
};

// function Pre(props) {}
export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
