const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Creates pages for MDX posts
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            category
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const updates = result.data.allMdx.nodes;

    // Create page for each mdx file
    updates.forEach(({ fields, id }) => {
      createPage({
        path: `${fields.slug}`,
        component: path.resolve('src/updates/template.js'),
        context: {
          slug: fields.slug,
          id: id
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Creates slug fields and urls for MDX updates
  if (node.internal.type === `Mdx`) {
    let value = createFilePath({ node, getNode });
    const path = node.fileAbsolutePath;

    // This is hacky but we need to get generate slugs for all mdx pages
    if (path.includes('/components/')) {
      value = `/components${value}`;
    }

    if (path.includes('/updates/')) {
      value = `/updates${value}`;
    }

    if (path.includes('/design/')) {
      value = `/design${value}`;
    }

    createNodeField({
      node,
      // Name of the field to be created
      name: `slug`,
      // Generated value based on filepath with "updates" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      // value: `/updates${value}`
      value: value
    });
  }
};
