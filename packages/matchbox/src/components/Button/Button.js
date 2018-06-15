import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Group from './Group';
import styles from './Button.module.scss';

class Button extends Component {
  static displayName = 'Button';

  static Group = Group;

  static propTypes = {
    color: PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    disabled: PropTypes.bool,
    destructive: PropTypes.bool,
    flat: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', 'default']),
    fullWidth: PropTypes.bool,
    submit: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    external: PropTypes.bool,
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    children: PropTypes.node
  }

  static defaultProps = {
    size: 'default'
  }

  handleMouseUp({ currentTarget }) {
    currentTarget.blur();
  }

  render() {
    const {
      children,

      // Styles
      primary, // Deprecate in favor of color
      color,
      disabled,
      destructive,
      plain, // Deprecate in favor of flat
      flat,
      outline,

      // Options
      size,
      fullWidth,
      submit,

      to,
      Component,
      component,
      external,

      // Events
      onClick,
      onFocus,
      onBlur,

      className = '',
      ...rest
    } = this.props;

    const WrapperComponent = component || Component;

    const buttonColor = primary ? 'orange' : color;

    const classname = classnames(
      styles.Button,
      buttonColor && styles[`color-${buttonColor}`],
      disabled && styles.disabled,
      destructive && styles.destructive,
      (flat || plain) && styles.flat,
      outline && styles.outline,
      fullWidth && styles.fullWidth,
      (size && size !== 'default') && styles[`${size}`],
      className
    );

    if (to && !WrapperComponent) {
      return (
        <a
          href={to}
          target={external ? '_blank' : ''}
          rel={external ? 'noopener noreferrer' : ''}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classname}
          disabled={disabled}
          onMouseUp={this.handleMouseUp}
          {...rest}
        >
          {children}
        </a>
      );
    }

    if (to && WrapperComponent) {
      return (
        <WrapperComponent
          to={to}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classname}
          disabled={disabled}
          onMouseUp={this.handleMouseUp}
          {...rest}
        >
          {children}
        </WrapperComponent>
      );
    }

    return (
      <button
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classname}
        disabled={disabled}
        onMouseUp={this.handleMouseUp}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
