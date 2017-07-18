import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Grid.module.scss';

const COL_COUNT = 12;

class Column extends Component {
  static displayName = 'Grid.Column';

  render() {
    const {
      children,
      xs,
      sm,
      md,
      lg,
      xsOffset,
      smOffset,
      mdOffset,
      lgOffset
    } = this.props;

    const colClasses = classnames(
      styles.Column,
      xs && styles[`xs-${xs}`],
      md && styles[`md-${md}`],
      lg && styles[`lg-${lg}`],
      xsOffset && styles[`xs-offset-${xsOffset}`],
      mdOffset && styles[`md-offset-${mdOffset}`],
      lgOffset && styles[`lg-offset-${lgOffset}`]
    );

    return <div className={colClasses}>{ children }</div>;
  }
}

class Grid extends Component {
  static Column = Column;

  render() {
    const {
      children,
      center,
      start,
      end,
      top,
      middle,
      bottom,
      around,
      between
    } = this.props;

    const gridClasses = classnames(
      styles.Grid,
      start && styles[`start-${start}`],
      center && styles[`center-${center}`],
      end && styles[`end-${end}`],
      top && styles[`top-${top}`],
      middle && styles[`middle-${middle}`],
      bottom && styles[`bottom-${bottom}`],
      around && styles[`around-${around}`],
      between && styles[`between-${between}`],
    );

    return <div className={gridClasses}>{ children }</div>;
  }
}

export default Grid;
