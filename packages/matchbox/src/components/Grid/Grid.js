import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Column from './Column';
import styles from './Grid.module.scss';

class Grid extends Component {
  static displayName = 'Grid';

  static Column = Column;

  static propTypes = {
    center: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    children: PropTypes.node
  };

  render() {
    const {
      children,
      start, center, end,
      top, middle, bottom,
      around, between,
      className
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
      className
    );

    return <div className={gridClasses}>{children}</div>;
  }
}

export default Grid;
