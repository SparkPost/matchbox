import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { PropsTable } from './PropsTable';

const components = {
  a: (props) => <Link to={props.href}>{props.children}</Link>,
  PropsTable
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
