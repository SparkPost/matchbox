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
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMdx.nodes;

    // Create page for each mdx file
    posts.forEach(({ fields, id }) => {
      createPage({
        path: fields.slug,
        component: path.resolve('src/posts/template.js'),
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

  // Creates slug fields and urls for MDX posts
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/posts${value}`
    });
  }
};
