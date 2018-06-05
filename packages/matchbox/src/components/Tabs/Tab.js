import React, { Component } from 'react';
import classnames from 'classnames';

import { UnstyledLink } from '../UnstyledLink';

import styles from './Tabs.module.scss';

class Tab extends Component {
  static displayName = 'Tab';

  handleClick = (event) => {
    const { index, onClick } = this.props;

    if (onClick) {
      return onClick(event, index);
    }
  }

  render() {
    const { index, content, selected, fittedTab, ...rest } = this.props;
    const classes = classnames(
      styles.Tab,
      selected === index && styles.selected,
      fittedTab && styles.fittedTab
    );

    return (
      <UnstyledLink className={classes} {...rest} onClick={this.handleClick}>
        {content}
      </UnstyledLink>
    );
  }
}

export default Tab;
