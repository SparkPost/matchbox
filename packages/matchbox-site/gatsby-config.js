const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Matchbox'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: path.resolve(__dirname, '../matchbox/src/components')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icon',
        path: path.resolve(__dirname, '../matchbox-icons/src/IconBase')
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    }
  ]
};
