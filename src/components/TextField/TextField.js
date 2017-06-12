import React, { Component } from 'react';
import { Fieldset, Label, Error } from '../Fieldset';
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

      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.TextField,
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
      ...rest,
      name,
      id,
      type,
      disabled,
      readOnly,
      autoFocus,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      className: classnames(styles.Input, error && styles.error)
      // 'aria-describedby':
      // 'aria-labelledby':
      // 'aria-invalid':
    });

    return (
      <Fieldset className={setClasses}>
        { labelMarkup }
        { input }
        { errorMarkup }
      </Fieldset>
    );
  }
};

export default TextField;
