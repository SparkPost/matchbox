import React, { Component } from 'react';
import { Cell, HeaderCell, Row } from './TableElements';
import styles from './Table.module.scss';

class Table extends Component {
  static Cell = Cell;
  static HeaderCell = HeaderCell;
  static Row = Row;

  render() {
    const {
      items,
      children,
      data
    } = this.props;

    const dataMarkup = data
      ? data.map((rowData, i) => (
          <Row rowData={rowData} key={`Row-${i}`} />
        ))
      : children;

    return (
      <table className={styles.Table}>
        { dataMarkup }
      </table>
    );
  }
};

export default Table;
