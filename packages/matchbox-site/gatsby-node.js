const path = require('path');

// Use this to create pages from mdx files
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allFile(filter: { extension: { eq: "mdx" } }) {
//           edges {
//             node {
//               absolutePath
//               relativeDirectory
//               name
//             }
//           }
//         }
//       }
//     `)
//       .then(result => {
//         if (result.errors) {
//           return reject(result.errors)
//         }
//
//         // Create markdown pages.
//         result.data.allFile.edges.forEach(
//           ({ node: { absolutePath, relativeDirectory, name } }) => {
//             createPage({
//               path: `${relativeDirectory}/${name}`,
//               component: absolutePath,
//             })
//           }
//         )
//       })
//       .then(resolve)
//   })
// }

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      alias: {
        '@sparkpost/matchbox-icons': path.resolve(__dirname, '../matchbox-icons/src'),
        '@sparkpost/matchbox': path.resolve(__dirname, '../matchbox/src')
      }
    }
  });

  return config;
};
