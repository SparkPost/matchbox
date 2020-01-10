import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { PropsTable } from './PropsTable';
import TokenTable from './tokens/TokenTable';
import Token from './tokens/Token';
import Heading from './Heading';

const components = {
  a: (props) => <Link to={props.href}>{props.children}</Link>,
  ExternalLink: (props) => <a href={props.to} target="_blank" rel="noopener norefferer">{props.children}</a>,
  PropsTable,
  TokenTable,
  Token,
  h1: (props) => <Heading as='h1' {...props} />,
  h2: (props) => <Heading as='h2' {...props} />,
  h3: (props) => <Heading as='h3' {...props} />
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
