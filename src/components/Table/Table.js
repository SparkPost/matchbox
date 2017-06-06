import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Table.module.scss';

class Table extends Component {
  render() {
    const {
      items
    } = this.props;
    
    return (
      <table className={styles.Table}>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </table>
    );
  }
};

export default Table;
