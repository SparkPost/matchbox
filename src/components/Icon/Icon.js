import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as Icons from '../../icons';

import styles from './Icon.module.scss';

class Icon extends Component {
  static displayName = 'Icon';

  static defaultProps = {
    size: 18
  };

  render() {
    const {
      name,
      size,
      className,
      ...rest
    } = this.props;

    const SvgIcon = Icons[name];

    if (!SvgIcon) {
      throw new Error('Icon does not exist. Check sparkpost.github.io/matchbox for a list of icons.');
    }

    return <SvgIcon className={cx(styles.Icon, className)} size={size} {...rest} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number
};

export default Icon;
