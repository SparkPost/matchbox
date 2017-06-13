import React, { Component } from 'react';
import { Label } from '../Label';
import { Error } from '../Error';
import classnames from 'classnames';
import styles from './Select.module.scss';

const Option = ({ option }) => {
  if (typeof option === 'string') {
    return <option value={option}>{ option }</option>
  }
  return <option value={option.value}>{ option.label }</option>
};

class Select extends Component {
  render() {
    const {
      id,
      options,
      label,
      labelHidden,
      placeholder,
      error,
      ...rest,
    } = this.props;

    const setClasses = classnames(
      styles.Select,
      error && styles.error
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

    return (
      <fieldset className={setClasses}>
        { labelMarkup }
        <select
          className={styles.Input}
          {...rest} >
          { optionMarkup }
        </select>
        { errorMarkup }
      </fieldset>
    );
  }
};

export default Select;
