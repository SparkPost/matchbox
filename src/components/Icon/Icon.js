import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Icons from '../../icons';

class Icon extends Component {
  render() {
    const {
      name,
      size = 18,
      ...rest
    } = this.props;

    const SvgIcon = Icons[name];

    if (!SvgIcon) {
      throw new Error('Icon does not exist. Visit material.io & src/icons/index.js for a list of icons.');
    }

    return <SvgIcon size={size} {...rest} />
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
