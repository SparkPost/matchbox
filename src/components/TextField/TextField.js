import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Connect } from '../Connect';
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
    helpText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    connectLeft: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    connectRight: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    prefix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    suffix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  state = { inputPadding: {} }

  componentDidMount() {
    const { prefix, suffix } = this.props;
    const prefixPadding = prefix && this.prefixNode ? { paddingLeft: this.prefixNode.getBoundingClientRect().width + 20 } : { };
    const suffixPadding = suffix && this.suffixNode ? { paddingRight: this.suffixNode.getBoundingClientRect().width + 20 } : { };
    this.setState({
      inputPadding: { ...prefixPadding, ...suffixPadding }
    });
  }

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
      connectLeft,
      connectRight,
      prefix,
      suffix,
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

    const prefixMarkup = prefix
      ? <span className={styles.Prefix} ref={node => this.prefixNode = node}>{ prefix }</span>
      : null;

    const suffixMarkup = suffix
      ? <span className={styles.Suffix} ref={node => this.suffixNode = node}>{ suffix }</span>
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
      className: styles.Input,
      style: { ...this.state.inputPadding }
      // 'aria-describedby':
      // 'aria-labelledby':
      // 'aria-invalid':
    });

    const inputMarkup = prefix || suffix
      ? <div className={styles.InputWrapper}>
          { prefixMarkup }
          { input }
          { suffixMarkup }
        </div>
      : input;

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <Connect left={connectLeft} right={connectRight}>
          { inputMarkup }
        </Connect>
        { errorMarkup }
        { helpMarkup }
      </fieldset>
    );
  }
};

export default TextField;
