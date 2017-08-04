import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    id: PropTypes.string,
    /**
     * Select options -
     * Array of Objects with { value, label } or Strings
     */
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        }),
        PropTypes.string.isRequired
      ])
    ).isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    helpText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  render() {
    const {
      id,
      options,
      label,
      labelHidden,
      helpText,
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

    const helpMarkup = helpText
      ? <div className={styles.HelpText}>{ helpText }</div>
      : null;

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <select
          className={inputClasses}
          disabled={disabled}
          {...rest} >
          { placeholderOption }
          { optionMarkup }
        </select>
        <Icon name='CaretDown' className={styles.Dropdown} />
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
};

export default Select;
