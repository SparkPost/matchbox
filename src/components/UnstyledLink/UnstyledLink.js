import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnstyledLink extends Component {
  static displayName = 'UnstyledLink';

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    external: PropTypes.bool,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    children: PropTypes.node
  }

  render() {
    const {
      children,
      to,
      component: Wrapper,
      external,
      ...rest
    } = this.props;

    if (to && !Wrapper) {
      return (
        <a
          href={to}
          target={external ? '_blank' : ''}
          rel={external ? 'noopener noreferrer' : ''}
          {...rest}>
            { children }
        </a>
      );
    }

    if (to && Wrapper) {
      return <Wrapper to={to} {...rest} >{ children }</Wrapper>;
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
