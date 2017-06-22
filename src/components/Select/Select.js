import React, { Component } from 'react';
import { Label } from '../Label';
import { Error } from '../Error';
import { Icon } from '../Icon';
import classnames from 'classnames';
import styles from './Select.module.scss';

const PLACEHOLDER_VALUE = '_placeholder';

const Option = ({ option }) => {
  if (typeof option === 'string') {
    return <option value={option}>{ option }</option>
  } else {
    return <option value={option.value}>{ option.label }</option>
  }
};

class Select extends Component {
  render() {
    const {
      id,
      options,
      label,
      labelHidden,
      placeholder,
      disabled,
      error,
      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.Select,
      error && styles.error,
      labelHidden && styles.labelHidden
    );

    const inputClasses = classnames(
      styles.Input,
      disabled && styles.disabled
    );

    const optionMarkup = options && options.length
      ? options.map((option, key) => <Option option={option} key={key} />)
      : null;

    const labelMarkup = label && !labelHidden
      ? <Label
          id={id}
          label={label} />
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const placeholderOption = placeholder
      ? <option label={placeholder} value={PLACEHOLDER_VALUE} disabled />
      : null;

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <select
          className={inputClasses}
          {...rest} >
          { placeholderOption }
          { optionMarkup }
        </select>
        <Icon name='ArrowDropDown' className={styles.Dropdown} />
        { errorMarkup }
      </fieldset>
    );
  }
};

export default Select;
