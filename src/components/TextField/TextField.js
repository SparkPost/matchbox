import React, { Component } from 'react';

import Label from './Label';

class TextField extends Component {
  render() {
    const {
      id,
      multiline,  // textarea || input
      type,
      placeholder,

      error,
      prefix,
      suffix,
      label,
      helptext,

      // Events
      onChange,
      onFocus,
      onBlur,
    } = this.props;

    return (
      <fieldset>
        <Label
          id={id}
          label={label}
          labelHidden={labelHidden} />
        <input></input>
        <p>{ error }</p>
      </fieldset>
    );
  }
};

export default TextField;
