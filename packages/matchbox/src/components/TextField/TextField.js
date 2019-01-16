import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Connect } from '../Connect';
import classnames from 'classnames';
import styles from './TextField.module.scss';

class TextField extends Component {
  static displayName = 'TextField';

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
    required: PropTypes.bool,
    /**
     * 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'
     */
    resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical', 'block', 'inline']),
    label: PropTypes.string,
    labelHidden: PropTypes.bool,
    helpText: PropTypes.node,
    connectLeft: PropTypes.node,
    connectRight: PropTypes.node,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    error: PropTypes.string,
    errorInLabel: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    resize: 'both',
    type: 'text'
  };

  state = {
    paddingLeft: null,
    paddingRight: null
  };

  componentDidMount() {
    this.calculatePadding();
  }

  componentDidUpdate({ prefix, suffix }) {
    if (prefix !== this.props.prefix || suffix !== this.props.suffix) {
      this.calculatePadding();
    }
  }

  calculatePadding() {
    this.setState({
      paddingLeft: this.prefixNode && this.prefixNode.getBoundingClientRect().width + 20,
      paddingRight: this.suffixNode && this.suffixNode.getBoundingClientRect().width + 20
    });
  }

  render() {
    const {
      id,
      name,
      multiline,
      type,
      placeholder,
      autoFocus,
      disabled,
      readOnly,
      required,
      resize,
      label,
      labelHidden,
      helpText,
      error,
      errorInLabel,
      onChange,
      onFocus,
      onBlur,
      connectLeft,
      connectRight,
      prefix,
      suffix,
      ...rest
    } = this.props;

    const { paddingLeft, paddingRight } = this.state;

    const setInputClasses = classnames(
      styles.Input,
      error && styles.Error
    );

    const requiredIndicator = required
      ? ' *'
      : '';

    const labelMarkup = (
      <Label id={id} label={`${label}${requiredIndicator}`}>
        {error && errorInLabel && <Error className={styles.InlineError} wrapper='span' error={error} />}
      </Label>
    );

    const helpMarkup = helpText
      ? <div className={styles.HelpText}>{helpText}</div>
      : null;

    const prefixMarkup = prefix
      ? <span className={styles.Prefix} ref={(node) => this.prefixNode = node}>{prefix}</span>
      : null;

    const suffixMarkup = suffix
      ? <span className={styles.Suffix} ref={(node) => this.suffixNode = node}>{suffix}</span>
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
      className: setInputClasses,
      style: { paddingLeft, paddingRight, resize }
      // 'aria-describedby':
      // 'aria-labelledby':
      // 'aria-invalid':
    });

    const inputMarkup = prefix || suffix
      ? <div className={styles.InputWrapper}>
        {prefixMarkup}
        {input}
        {suffixMarkup}
      </div>
      : input;

    return (
      <fieldset className={styles.TextField}>
        {label && !labelHidden && labelMarkup}
        <Connect left={connectLeft} right={connectRight}>
          {inputMarkup}
        </Connect>
        {error && !errorInLabel && <Error error={error} />}
        {helpMarkup}
      </fieldset>
    );
  }
}

export default TextField;
