import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnstyledLink extends Component {
  render() {
    const {
      children,
      to,
      Component,
      external,
      ...rest
    } = this.props;

    if (to && external) {
      return <a href={to} target='_blank' {...rest}>{ children }</a>;
    }

    if (to && Component) {
      return <Component to={to} {...rest} >{ children }</Component>;
    }

    return <a {...rest}>{ children }</a>;
  }
}

export default UnstyledLink;
