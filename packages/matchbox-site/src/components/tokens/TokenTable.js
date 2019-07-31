import React from 'react';
import tokens from '@sparkpost/design-tokens/dist/index.meta.json';

function TokenTable() {

  function renderTokenRow(token, i) {
    return (
      <div key={`${token.name}-${i}`} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <strong>{token.friendly}</strong>
        <p>{token.type}</p>
        <p>{token.css}</p>
        <p>{token.scss}</p>
        <p>{token.value}</p>
      </div>
    );
  }

  return (
    <div>
      {tokens.map(renderTokenRow)}
    </div>
  );
}

export default TokenTable;
