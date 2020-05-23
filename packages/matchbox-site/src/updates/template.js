import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import useUpdateBySlug from '../hooks/useUpdateBySlug';

function Template() {
  const { body } = useUpdateBySlug();

  return (
    <Layout>
      <Link to="/updates">All Updates</Link>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export default Template;
