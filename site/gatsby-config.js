require('dotenv').config();
const { flatten } = require('lodash');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Matchbox',
    description:
      'Matchbox is the design system for SparkPost products. It is a collection of styles, components, patterns and guidelines used for building interfaces.',
    author: '@sparkpost',
    keywords:
      'SparkPost, design, system, Matchbox, design system, styleguide, style, guide, components, library, pattern, kit, component'
  },
  plugins: flatten([
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/Layout.js'),
          components: require.resolve(
            './src/components/Layout/SideBarLayout.js'
          ),
          design: require.resolve('./src/components/Layout/SideBarLayout.js')
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
    {
      // Sources mdx post pages
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'updates',
        path: `${__dirname}/src/updates`
      }
    },
    {
      // Sources mdx component pages
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/src/pages/components`
      }
    },
    {
      // Sources mdx component pages
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design',
        path: `${__dirname}/src/pages/design`
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
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        // Uncomment these aliases if you want to reference local matchbox packages
        alias:
          process.env.LOCAL_MATCHBOX === 'true'
            ? {
                react: path.resolve(__dirname, '../node_modules/react'),
                'styled-components': path.resolve(
                  __dirname,
                  '../node_modules/styled-components'
                ),
                '@sparkpost/design-tokens': path.resolve(
                  __dirname,
                  '../packages/design-tokens'
                ),
                '@sparkpost/matchbox-icons': path.resolve(
                  __dirname,
                  '../packages/matchbox-icons/src'
                ),
                '@sparkpost/matchbox': path.resolve(
                  __dirname,
                  '../packages/matchbox/src'
                )
              }
            : {},
        extensions: []
      }
    },
    process.env.GATSBY_ACTIVE_ENV === 'index'
      ? [
          {
            resolve: `gatsby-plugin-algolia`,
            options: {
              enablePartialUpdates: true,
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              queries: require('./src/utils/algolia-queries')
            }
          }
        ]
      : []
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ])
};
