import React from 'react';
import styles from './TokenTable.module.scss';
import TokenUsage from './TokenUsage';

function TokenTable(props) {
  const [usageType, setType] = React.useState('scss');

  function handleTypeSelect(e) {
    setType(e.target.value);
  }

  function renderTokenRow(token, i) {

    const cells = props.columns.map((type) => {
      let cell = token[type];

      if (type === 'usage') {
        cell = <TokenUsage usage={token[usageType] || token.value}/>;
      }

      return <td key={type} className={styles[type]}>{cell}</td>;
    });

    return <tr key={`${token.name}-${i}`}>{cells}</tr>;
  }

  return (
    <div>
      <div className={styles.Header}>
        <h4>Tokens</h4>
        <div>
          <select onChange={handleTypeSelect} value={usageType}>
            <option value='scss'>Scss</option>
            <option value='css'>CSS</option>
            <option value='javascript'>Javascript</option>
          </select>
        </div>
      </div>'     '<table className={styles.TokenTable}>
        <tbody>
          {props.tokens.map(renderTokenRow)}
        </tbody>
      </table>
    </div>
  );
}

export default TokenTable;
