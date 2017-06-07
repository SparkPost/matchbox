import React, { Component } from 'react';
import Label from './Label';
import Error from './Error';
import classnames from 'classnames';
import styles from './TextField.module.scss';

// TODO
// prefix & suffix
// error icon
// do we need to set refs
// do we need to accept height along with multiline
// a11y attributes

class TextField extends Component {
  render() {
    const {
      id,
      multiline,    // textarea || input
      type,         // string
      placeholder,  // string
      autoFocus,    // boolean
      disabled,     // boolean
      readOnly,     // boolean

      prefix,
      suffix,
      label,        // string
      labelHidden,  // boolean
      error,        // string

      // Events
      onChange,
      onFocus,
      onBlur,
    } = this.props;

    const setClasses = classnames(
      styles.TextField,
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
      onChange: onChange,
      className: styles.Input,
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
