import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import classnames from 'classnames';
import styles from './TextField.module.scss';

class TextField extends Component {
  static propTypes = {
    id: PropTypes.string,
    multiline: PropTypes.bool,
    /**
     * 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'date'
     */
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'search', 'tel', 'url', 'date']),
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    helpText: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  render() {
    const {
      id,
      multiline,
      type,
      placeholder,
      autoFocus,
      disabled,
      readOnly,
      label,
      labelHidden,
      helpText,
      error,
      onChange,
      onFocus,
      onBlur,
      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.TextField,
      error && styles.error
    );

    const labelMarkup = label && !labelHidden
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
      className: styles.Input
      // 'aria-describedby':
      // 'aria-labelledby':
      // 'aria-invalid':
    });

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        { input }
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
};

export default TextField;
