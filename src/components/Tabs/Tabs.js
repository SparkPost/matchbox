import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { UnstyledLink } from '../UnstyledLink';

import styles from './Tabs.module.scss';

class Tab extends Component {
  static displayName = 'Tab';

  render() {
    const { index, content, selected, ...rest } = this.props;
    const classes = classnames(
      styles.Tab,
      selected === index && styles.selected
    );
    return (
      <UnstyledLink className={classes} {...rest}>
        { content }
      </UnstyledLink>
    );
  }
}

class Tabs extends Component {
  static displayName = 'Tabs';

  static propTypes = {
    /**
     * Tab Content
     * Actions that build the tabs. Most button and unstyled link props will work in here.
     * e.g. { content: 'Label', onClick: callback() }
     */
    tabs: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired
    })),
    /**
      * Index of selected tab
      */
    selected: PropTypes.number.isRequired,
    /**
      * Connects this component with component underneath it. Works well with Panels.
      */
    connectBelow: PropTypes.bool
  };

  static defaultProps = {
    connectBelow: true
  };

  render() {
    const { tabs, selected, connectBelow } = this.props;

    const tabMarkup = tabs.map((tab, i) => <Tab key={i} index={i} selected={selected} {...tab} />);

    const tabsClasses = classnames(
      styles.Tabs,
      connectBelow && styles.connectBelow
    );

    return (
      <div className={tabsClasses}>
        { tabMarkup }
      </div>
    );
  }
}

export default Tabs;
