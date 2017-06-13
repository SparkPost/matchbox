import React, { Component } from 'react';
import { Label } from '../Label';
import { Error } from '../Error';
import classnames from 'classnames';
import styles from './Select.module.scss';


class Select extends Component {
  render() {
    const {
      id,
      options,
      label,
      labelHidden,
      error,
      ...rest,
    } = this.props;

    const optionMarkup = options && options.length
          ? options.map((option, key) => <option>{option}</option>)
          : null;

    const labelMarkup = label
      ? <Label
          id={id}
          label={label}
          labelHidden={labelHidden} />
      : null;

    const errorMarkup = error
      ? <Error error={error} />
      : null;

    return (
      <select
        className={styles.Select}
        {...rest} >
        { optionMarkup }
      </select>
    );
  }
};

export default Select;
