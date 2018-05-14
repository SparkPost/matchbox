import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Grid.module.scss';

class Column extends Component {
  static displayName = 'Grid.Column';

  static propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    children: PropTypes.node
  };

  render() {
    const {
      children,
      xs, sm, md, lg, xl,
      xsOffset, smOffset, mdOffset, lgOffset, xlOffset,
      ...rest
    } = this.props;

    const colClasses = classnames(
      styles.Column,
      xs && styles[`xs-${xs}`],
      sm && styles[`sm-${sm}`],
      md && styles[`md-${md}`],
      lg && styles[`lg-${lg}`],
      xl && styles[`xl-${xl}`],
      xsOffset && styles[`xs-offset-${xsOffset}`],
      smOffset && styles[`sm-offset-${smOffset}`],
      mdOffset && styles[`md-offset-${mdOffset}`],
      lgOffset && styles[`lg-offset-${lgOffset}`],
      xlOffset && styles[`xl-offset-${xlOffset}`]
    );

    return <div className={colClasses} {...rest}>{children}</div>;
  }
}

export default Column;
