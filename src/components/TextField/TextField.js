import React, { Component } from 'react';
import Label from './Label';
import Error from './Error';
import classnames from 'classnames';
import styles from './TextField.module.scss';

class TextField extends Component {
  render() {
    const {
      id,
      multiline,  // textarea || input
      type,
      placeholder,
      labelHidden,
      autoFocus,
      disabled,
      readOnly,

      error,
      prefix,
      suffix,
      label,

      // Events
      onChange,
      onFocus,
      onBlur,
    } = this.props;

    const setClasses = classnames(
      styles.Fieldset,
      error && styles.error,
      prefix && styles.prefix,
      suffix && styles.suffix
    );

    const labelMarkup = label
      ? <Label
          id={id}
          label={label}
          labelHidden={labelHidden} />
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    const input = React.createElement(multiline ? 'textarea' : 'input', {
      name,
      id,
      type,
      disabled,
      readOnly,
      autoFocus,
      placeholder,
      onFocus,
      onBlur,
      className: styles.TextField,
      // onChange: this.handleChange,
      // 'aria-describedby':
      // 'aria-labelledby':
      // 'aria-invalid':
    });

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        { input }
        { errorMarkup }
      </fieldset>
    );
  }
};

export default TextField;
