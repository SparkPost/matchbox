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
      Component,
      component,
      external,
      ...rest
    } = this.props;

    const WrapperComponent = component || Component;

    if (to && !WrapperComponent) {
      return (
        <a
          href={to}
          target={external ? '_blank' : ''}
          rel={external ? 'noopener noreferrer' : ''}
          {...rest}>
          {children}
        </a>
      );
    }

    if (WrapperComponent) {
      return <WrapperComponent to={to} {...rest} >{children}</WrapperComponent>;
    }

    return <a {...rest}>{children}</a>;
  }
}

export default UnstyledLink;
