import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from '../Label';
import { Error } from '../Error';
import { Icon } from '../Icon';
import styles from './Checkbox.module.scss';

class Checkbox extends Component {
  handleChange(event) {
    const { onChange, id } = this.props;
    if (onChange) {
      onChange(event.currentTarget.checked, id);
    }
  }

  render() {
    const {
      id,
      disabled,
      readOnly,
      checked,
      label,
      labelHidden,
      error,
      value,
      onChange,
      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.Checkbox,
      error && styles.error
    );

    const inputClasses = classnames(
      styles.Input
    );

    const labelMarkup = label && !labelHidden
      ? <Label
          id={id}
          label={label}
          className={styles.Label}
        />
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const boxMarkup = checked
      ? <Icon name='CheckBox' className={styles.Box} />
      : <Icon name='CheckBoxOutlineBlank' className={styles.Box}/>;

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <input
          id={id}
          disabled={disabled}
          value={value}
          checked={checked}
          className={styles.Input}
          onChange={(event) => this.handleChange(event)}
          type='checkbox' />
        <div className={styles.Box} />
        <Icon name='Check' className={styles.Check} size={14}/>
        { errorMarkup }
      </fieldset>
    );
  }
};

export default Checkbox;
