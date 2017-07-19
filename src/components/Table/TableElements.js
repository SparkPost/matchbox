import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const Cell = ({ value, children, ...rest }) => (
  <td className={styles.Cell} {...rest}>{ value || children }</td>
);

Cell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
Cell.displayName = 'Table.Cell';

const HeaderCell = ({ value, children, ...rest }) => (
  <th className={styles.HeaderCell} {...rest}>{ value || children }</th>
);

HeaderCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
HeaderCell.displayName = 'Table.HeaderCell';

const Row = ({ rowData, children }) => (
  <tr className={styles.Row}>
    {
      rowData
       ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`}/>)
       : children
    }
  </tr>
);

Row.propTypes = {
  rowData: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};
Row.displayName = 'Table.Row';

export { Cell, HeaderCell, Row };
