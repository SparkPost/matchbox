import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';

import '../../../matchbox/src/styles/index.scss';
import styles from './index.module.scss';

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A React UI component library built by SparkPost' },
        { name: 'keywords', content: 'react, components, sparkpost' }
      ]}
    />
    <div className={styles.Container}>
      {children()}
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
