import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { PropsTable } from './PropsTable';
import TokenTable from './tokens/TokenTable';
import Token from './tokens/Token';

const components = {
  a: (props) => <Link to={props.href}>{props.children}</Link>,
  PropsTable,
  TokenTable,
  Token
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
