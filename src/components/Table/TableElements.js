import React, { Component } from 'react';
import styles from './Table.module.scss';

export const Cell = ({ value, children, ...rest }) => (
  <td className={styles.Cell} {...rest}>{ value || children }</td>
);

export const HeaderCell = ({ value, children, ...rest }) => (
  <th className={styles.HeaderCell} {...rest}>{ value || children }</th>
);

export const Row = ({ rowData, children }) => (
  <tr className={styles.Row}>
    {
      rowData
       ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`}/>)
       : children
    }
  </tr>
);
