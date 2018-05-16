import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Table.module.scss';

const Cell = ({ value, children, className, ...rest }) => (
  <td className={classnames(styles.Cell, className)} {...rest}>{value || children}</td>
);

Cell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};
Cell.displayName = 'Table.Cell';

const HeaderCell = ({ value, children, className, ...rest }) => (
  <th className={classnames(styles.HeaderCell, className)} {...rest}>{value || children}</th>
);

HeaderCell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};
HeaderCell.displayName = 'Table.HeaderCell';

const Row = ({ rowData, children, className, ...rest }) => (
  <tr className={classnames(styles.Row, className)} {...rest}>
    {
      rowData
        ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`}/>)
        : children
    }
  </tr>
);

Row.propTypes = {
  rowData: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node
};
Row.displayName = 'Table.Row';

export { Cell, HeaderCell, Row };
