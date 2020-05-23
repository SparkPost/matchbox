import React from 'react';
// import { Link, useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import usePostBySlug from '../hooks/usePostBySlug';

function Template() {
  const { body } = usePostBySlug();
  return (
    <Layout>
      {/* <MDXProvider components={shortcodes}> */}
      <MDXRenderer>{body}</MDXRenderer>
      {/* </MDXProvider> */}
    </Layout>
  );
}

export default Template;
