import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import * as Icons from 'react-icons/lib/md';
import * as Icons from '../../icons';

class Icon extends Component {
  render() {
    const {
      name,
      size = 18,
      ...rest
    } = this.props;
    console.log(Icons);
    const SvgIcon = Icons[`Md${name}`];

    if (!SvgIcon) {
      throw new Error('Icon does not exist. Visit material.io for a list of icons.');
    }

    return <SvgIcon size={size} {...rest} />
  }
};

export default Icon;
