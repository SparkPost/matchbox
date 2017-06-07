import React, { Component } from 'react';
import styles from './Table.module.scss';

export const Cell = ({ value, children }) => (
  <td className={styles.Cell}>{ value || children }</td>
);

export const HeaderCell = ({ value, children }) => (
  <th className={styles.HeaderCell}>{ value || children }</th>
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
