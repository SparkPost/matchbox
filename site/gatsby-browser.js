/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react');
const PageElement = require('./src/components/GatsbyWrappers/PageElement')
  .default;

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (!location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }
  return true;
};

exports.wrapPageElement = ({ element, props }) => {
  return <PageElement {...props}>{element}</PageElement>;
};
