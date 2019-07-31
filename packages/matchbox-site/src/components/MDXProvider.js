import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

const components = {
  a: (props) => <Link to={props.href}>{props.children}</Link>
};

export default ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
