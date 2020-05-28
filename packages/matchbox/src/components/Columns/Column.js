import React from 'react';

function Column(props) {
  const { children } = props;

  return <div>{children}</div>;
}

Column.displayName = 'Columns.Column';

export default Column;
