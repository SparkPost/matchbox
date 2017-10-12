import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import Group from './Group';

import styles from './Radio.module.scss';

class Radio extends Component {
  static Group = Group;

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    helpText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      id,
      name,
      checked,
      label,
      labelHidden,
      disabled,
      error,
      value,
      onChange,
      onFocus,
      onBlur,
      helpText,
      ...rest
    } = this.props;

    const setClasses = classnames(
      styles.Radio,
      error && styles.error
    );

    const labelMarkup = label && !labelHidden
      ? <Label
          id={id}
          label={label}
          className={styles.Label} />
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const helpMarkup = helpText
      ? <div className={styles.HelpText}>{ helpText }</div>
      : null;

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <input
          id={id}
          name={name}
          value={value}
          checked={checked}
          className={styles.Input}
          disabled={disabled}
          onChange={(event) => onChange(event)}
          onFocus={onFocus}
          onBlur={onBlur}
          type='radio'
          {...rest}/>
          <label htmlFor={id} className={styles.Control}>
            <div className={styles.Outline} />
            <div className={styles.Fill} />
          </label>
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
}

export default Radio;
