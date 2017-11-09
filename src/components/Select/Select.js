import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Icon } from '../Icon';

import classnames from 'classnames';
import styles from './Select.module.scss';

const Option = ({ option }) => {
  if (typeof option === 'object') {
    const { value, label = value, ...rest } = option;
    return <option value={value} {...rest}>{label}</option>;
  } else if (typeof option === 'string' || typeof option === 'number') {
    return <option value={option}>{ option }</option>;
  }
};

class Select extends Component {
  static displayName = 'Select';

  static defaultProps = {
    placeholderValue: ''
  }

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
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
      ])
    ).isRequired,
    placeholder: PropTypes.string,
    placeholderValue: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
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
      helpText,
      placeholder,
      placeholderValue,
      disabled,
      error,
      ...rest
    } = this.props;

    const setClasses = classnames(
      styles.Select,
      error && styles.error
    );

    const inputClasses = classnames(
      styles.Input,
      disabled && styles.disabled
    );

    const dropdownClasses = classnames(
      styles.Dropdown,
      !label && styles.labelHidden
    );

    let combined = options;

    if (placeholder) {
      combined = [ { label: placeholder, value: placeholderValue, disabled: true }, ...combined ];
    }

    const optionMarkup = combined && combined.length
      ? combined.map((option, key) => <Option option={option} key={key} />)
      : null;

    const labelMarkup = label
      ? <Label
          id={id}
          label={label} />
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
        <select
          className={inputClasses}
          disabled={disabled}
          {...rest} >
          { optionMarkup }
        </select>
        <Icon name='CaretDown' className={dropdownClasses} />
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
}

export default Select;
