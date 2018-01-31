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
    headers: PropTypes.array,
    /**
     * React node(s)
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      children,
      headers,
      data
    } = this.props;
    
    const headersMarkup = headers
      ? <thead>{headers.map((rowData, i) => <Row rowData={rowData} key={`Header-${i}`} isHeaderRow={true} />)}</thead>
      : null;

    const dataMarkup = data
      ? <tbody>{data.map((rowData, i) => <Row rowData={rowData} key={`Row-${i}`} />)}</tbody>
      : children;

    return (
      <table className={styles.Table}>
        {headerMarkup}
        {dataMarkup}
      </table>
    );
  }
}

export default Table;
