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

    if (to && !Component) {
      return <a href={to} target={external ? '_blank' : ''} {...rest}>{ children }</a>;
    }

    if (to && Component) {
      return <Component to={to} {...rest} >{ children }</Component>;
    }

    return <a {...rest}>{ children }</a>;
  }
}

export function linkFrom({ content, ...action }, key) {
  return (
    <UnstyledLink
      key={key}
      children={content}
      {...action}
    />
  );
}

export default UnstyledLink;
