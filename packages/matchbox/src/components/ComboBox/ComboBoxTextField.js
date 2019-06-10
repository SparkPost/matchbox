import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Tag } from '../Tag';
import { identity, noop } from '../../helpers/event';
import { onKey } from '../../helpers/keyEvents';
import classnames from 'classnames';
import styles from './ComboBoxTextField.module.scss';

function ComboBoxTextField(props) {
  const {
    autoFocus,
    disabled,
    error,
    errorInLabel,
    helpText,
    id,
    itemToString,
    label,
    labelHidden,
    name,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    removeItem,
    style,
    selectedItems,
    value,
    ...rest
  } = props;

  const inputRef = React.useRef();

  const setWrapperClasses = classnames(
    styles.Wrapper,
    error && styles.Error,
    disabled && styles.Disabled
  );

  const labelMarkup = (
    <Label id={id} label={label}>
      {error && errorInLabel && <Error className={styles.InlineError} wrapper='span' error={error} />}
    </Label>
  );

  const helpMarkup = helpText
    ? <div className={styles.HelpText}>{helpText}</div>
    : null;

  const selectedMarkup = selectedItems.length
    ? selectedItems.map((item, i) => (
      <Tag
        key={i}
        onRemove={!disabled
          ? () => removeItem(item)
          : null
        }
      >
        {itemToString(item)}
      </Tag>
    ))
    : null;

  // Auto focuses the input
  function handleClick() {
    inputRef.current.focus();
  }

  // Removes last item with a backspace and and empty input value
  function handleKeyDown(e) {
    if (!value && selectedItems.length) {
      onKey('backspace', () => {
        removeItem(selectedItems[selectedItems.length - 1]);
      })(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  return (
    <fieldset className={styles.TextField}>
      {label && !labelHidden && labelMarkup}
      <div className={setWrapperClasses} onClick={handleClick}>
        {selectedMarkup}
        <input
          {...rest}
          autoFocus={autoFocus}
          className={styles.Input}
          disabled={disabled}
          id={id}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={inputRef}
          style={style}
          value={value}
        />
      </div>
      {error && !errorInLabel && <Error error={error} />}
      {helpMarkup}
    </fieldset>
  );
}

ComboBoxTextField.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  helpText: PropTypes.node,
  id: PropTypes.string,
  itemToString: PropTypes.func,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  removeItem: PropTypes.func,
  selectedItems: PropTypes.array
};

ComboBoxTextField.defaultProps = {
  selectedItems: [],
  itemToString: identity,
  removeItem: noop
};

export default ComboBoxTextField;
