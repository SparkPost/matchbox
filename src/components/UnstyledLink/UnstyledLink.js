import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnstyledLink extends Component {
  static displayName = 'UnstyledLink';

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    external: PropTypes.bool,
    Component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  render() {
    const {
      children,
      to,
      Component,
      external,
      ...rest
    } = this.props;

    if (to && !Component) {
      return <a href={to} target={external ? '_blank' : ''} rel={external ? 'noopener noreferrer' : ''} {...rest}>{ children }</a>;
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
