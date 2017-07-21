import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import { Icon } from '../Icon';
import Group from './Group';
import styles from './Checkbox.module.scss';

class Checkbox extends Component {
  static Group = Group;

  static propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    helpText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  render() {
    const {
      id,
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
      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.Checkbox,
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
          value={value}
          checked={checked}
          disabled={disabled}
          className={styles.Input}
          onChange={(event) => onChange(event)}
          onFocus={onFocus}
          onBlur={onBlur}
          type='checkbox' />
          <label htmlFor={id} className={styles.Control}>
            <div className={styles.Box} />
            <Icon name='Check' className={styles.Check} size={14}/>
          </label>
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
};

export default Checkbox;
