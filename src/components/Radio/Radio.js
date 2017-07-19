import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import { Icon } from '../Icon';
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
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  render() {
    const {
      id,
      name,
      checked,
      label,
      labelHidden,
      error,
      value,
      onChange,
      onFocus,
      onBlur,
      ...rest,
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

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <input
          id={id}
          name={name}
          value={value}
          checked={checked}
          className={styles.Input}
          onChange={(event) => onChange(event)}
          onFocus={onFocus}
          onBlur={onBlur}
          type='radio' />
          <label htmlFor={id} className={styles.Control}>
            <div className={styles.Outline} />
            <div className={styles.Fill} />
          </label>
        { errorMarkup }
      </fieldset>
    );
  }
};

export default Radio;
