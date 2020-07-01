/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (!location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }
  return true;
};
