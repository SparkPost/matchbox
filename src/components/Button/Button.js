import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.scss';

const Button = ({
  children,

  // Styles
  primary,
  disabled,
  destructive,
  plain,        // Button that looks like an inline link

  // Options
  size,       // small || large
  fullWidth,  // boolean
  submit,     // boolean, chages type to submit

  to,         // internal url
  Component,  // override component used, eg. react-routers <Link/>
  external,   // changes to <a>, outputs target=_blank

  // Events
  onClick,
  onFocus,
  onBlur
}) => {

  const classname = classnames(
    styles.Button,
    primary && styles.primary,
    disabled && styles.disabled,
    destructive && styles.destructive,
    plain && styles.plain,
    fullWidth && styles.fullWidth,
    size && styles[`${size}`]
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
        onMouseUp={handleMouseUp}
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
        onMouseUp={handleMouseUp}
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
      onMouseUp={handleMouseUp}
      >
      { children }
    </button>
  );
}

const handleMouseUp = ({ currentTarget }) => {
  currentTarget.blur();
}

export function buttonsFrom(actions, overrides) {
  if (actions.length) {
    return actions.map((action, key) => buttonFrom(action, overrides, key));
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

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  destructive: PropTypes.bool,
  plain: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'default']),
  fullWidth: PropTypes.bool,
  submit: PropTypes.bool,
  to: PropTypes.string,
  Component: PropTypes.element,
  external: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Button;
