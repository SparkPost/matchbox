import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { PropsTable } from './PropsTable';
import { SystemPropsTags } from './SystemProps';
import TokenTable from './tokens/TokenTable';
import Token from './tokens/Token';
import Heading from './Heading';
import ExternalLink from './ExternalLink';

const components = {
  a: props => <Link to={props.href}>{props.children}</Link>,
  ExternalLink,
  PropsTable,
  SystemPropsTags,
  TokenTable,
  Token,
  Heading,
  h1: props => <Heading as="h1" {...props} />,
  h2: props => <Heading as="h2" {...props} />,
  h3: props => <Heading as="h3" {...props} />,
  h4: props => <Heading as="h4" {...props} />,
  h5: props => <Heading as="h5" {...props} />,
  Link
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
