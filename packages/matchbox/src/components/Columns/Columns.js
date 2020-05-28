import React from 'react';
import Column from './Column';

function Columns(props) {
  const { children } = props;

  return <div>{children}</div>;
}

Columns.displayName = 'Columns';
Columns.Column = Column;

export default Columns;
