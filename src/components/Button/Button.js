import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Group from './Group';
import styles from './Button.module.scss';

class Button extends Component {
  static Group = Group;

  static propTypes = {
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    destructive: PropTypes.bool,
    plain: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', 'default']),
    fullWidth: PropTypes.bool,
    submit: PropTypes.bool,
    to: PropTypes.string,
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
      primary,
      disabled,
      destructive,
      plain,
      outline,

      // Options
      size,
      fullWidth,
      submit,

      to,
      Component,
      external,

      // Events
      onClick,
      onFocus,
      onBlur,

      className,
      ...rest
    } = this.props;

    const classname = classnames(
      styles.Button,
      primary && styles.primary,
      disabled && styles.disabled,
      destructive && styles.destructive,
      plain && styles.plain,
      outline && styles.outline,
      fullWidth && styles.fullWidth,
      size && styles[`${size}`],
      className && className
    );

    if (to && external) {
      return (
        <a
          href={to}
          target='_blank'
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classname}
          disabled={disabled}
          onMouseUp={(e) => this.handleMouseUp(e)}
          {...rest}
          >
          { children }
        </a>
      );
    }

    if (to && Component) {
      return (
        <Component
          to={to}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classname}
          disabled={disabled}
          onMouseUp={(e) => this.handleMouseUp(e)}
          {...rest}
          >
          { children }
        </Component>
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
        onMouseUp={(e) => this.handleMouseUp(e)}
        {...rest}
        >
        { children }
      </button>
    );
  }
};

export function buttonsFrom(actions, overrides) {
  if (actions.length) {
    return <Button.Group>{ actions.map((action, key) => buttonFrom(action, overrides, key)) }</Button.Group>;
  }
}

export function buttonFrom({ content, ...action }, overrides, key) {
  return (
    <Button
      key={key}
      children={content}
      {...action}
      {...overrides}
    />
  );
}

export default Button;
