import React from 'react';
import { graphql, Link } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import { Box, Text } from '@sparkpost/matchbox';
import Layout from '../components/Layout/Layout';

function Template({ data }) {
  const { body, frontmatter = {} } = data.mdx;

  return (
    <Layout maxWidth="1200" noSidebar>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Box mb="600" fontSize="300" lineHeight="300">
        <Link to="/updates">Back to All Updates</Link>
      </Box>
      <Text as="h1" mb="0">
        {frontmatter.title}
      </Text>
      <Text as="p" fontSize="300" lineHeight="300" color="gray.700" mb="800">
        {frontmatter.date}
      </Text>
      <hr />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query SingleUpdateBySlug($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        category
        date(formatString: "YYYY MMMM Do")
      }
      fields {
        slug
      }
    }
  }
`;

export default Template;
