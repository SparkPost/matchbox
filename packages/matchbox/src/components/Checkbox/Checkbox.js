import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import { Check } from '@sparkpost/matchbox-icons';
import Group from './Group';
import styles from './Checkbox.module.scss';

class Checkbox extends Component {
  static displayName = 'Checkbox';

  static Group = Group;

  static defaultProps = {
    required: false
  }

  static propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.node,
    labelHidden: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    helpText: PropTypes.node
  };

  render() {
    const {
      id,
      checked,
      label,
      labelHidden,
      disabled,
      required,
      error,
      value,
      onChange,
      onFocus,
      onBlur,
      helpText,
      ...rest
    } = this.props;

    const setClasses = classnames(
      styles.Checkbox,
      error && styles.error
    );

    const requiredIndicator = required
      ? ' *'
      : '';

    const labelMarkup = label && !labelHidden
      ? <Label id={id} className={styles.Label}>
        {label}{requiredIndicator}
      </Label>
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const helpMarkup = helpText
      ? <div className={styles.HelpText}>{ helpText }</div>
      : null;

    return (
      <fieldset className={setClasses}>
        <input
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          className={styles.Input}
          onChange={(event) => onChange(event)}
          onFocus={onFocus}
          onBlur={onBlur}
          type='checkbox'
          {...rest} />
        <label htmlFor={id} className={styles.Control}>
          <div className={styles.Box} />
          <Check className={styles.Check} size={14}/>
        </label>
        { labelMarkup }
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
}

export default Checkbox;
