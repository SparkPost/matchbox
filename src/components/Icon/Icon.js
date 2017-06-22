import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/lib/md';

// List of icons: http://gorangajic.github.io/react-icons/md.html

class Icon extends Component {
  render() {
    const {
      name,
      size = 18,
      ...rest
    } = this.props;

    const Icon = Icons[`Md${name}`];

    if (!Icon) {
      throw new Error(`Icon "${name}" does not exist`);
    }

    return <Icon size={size} {...rest} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default Icon;
