const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Matchbox',
    description: 'SparkPost Design System',
    author: '@sparkpost'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/Layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'routes',
        path: `${__dirname}/src/routes`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: path.resolve(__dirname, '../matchbox/src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        // Uncomment these aliases if you want to reference local matchbox packages
        // alias: {
        //   '@sparkpost/matchbox': path.resolve(__dirname, '../matchbox/src'),
        //   '@sparkpost/matchbox-icons': path.resolve(
        //     __dirname,
        //     '../matchbox-icons/src'
        //   ),
        //   '@sparkpost/design-tokens': path.resolve(
        //     __dirname,
        //     '../design-tokens'
        //   )
        // },
        // extensions: []
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
