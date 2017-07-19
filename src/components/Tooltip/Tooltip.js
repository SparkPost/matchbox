import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Tooltip.module.scss';

class Tooltip extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <div>tooltip</div>
    )
  }
};

export default Tooltip;
