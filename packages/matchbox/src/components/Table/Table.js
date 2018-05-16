import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cell, HeaderCell, Row } from './TableElements';
import styles from './Table.module.scss';

class Table extends Component {
  static displayName = 'Table';

  static Cell = Cell;
  static HeaderCell = HeaderCell;
  static Row = Row;

  static propTypes = {
    data: PropTypes.array,
    /**
     * React node(s)
     */
    children: PropTypes.node
  };

  render() {
    const {
      children,
      data
    } = this.props;

    const dataMarkup = data
      ? <tbody>{data.map((rowData, i) => <Row rowData={rowData} key={`Row-${i}`} />)}</tbody>
      : children;

    return (
      <table className={styles.Table}>
        {dataMarkup}
      </table>
    );
  }
}

export default Table;
