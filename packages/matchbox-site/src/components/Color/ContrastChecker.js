import React from 'react';

import tokens from './unpublished.js';
import _ from 'lodash';
import color from 'color';
import classnames from 'classnames';
import styles from './ContrastChecker.module.scss';

const colors = tokens.filter(({ type, name }) => type === 'color' && !name.includes('brand') && !name.includes('base') || name.includes('white'));
const brand = tokens.filter(({ type, name }) => type === 'color' && name.includes('brand'));

const keys = ['gray', 'red', 'magenta', 'purple', 'blue', 'teal', 'green', 'yellow'];

function Td({ c, selected, onSelect, ...rest }) {
  const contrast = color(selected.value).contrast(color(c.value)).toFixed(2);
  return (
    <td
      {...rest}
      role='button'
      onMouseOver={() => onSelect(c)}
      style={{ background: c.value }}
      className={classnames(
        c.name === selected.name && styles.selected,
        color(c.value).isDark() && styles.dark,
        contrast > 3 && styles.pass
      )}>
        {contrast}
      </td>
  )
}

function ContrastChecker() {
  const [selected, setSelected] = React.useState('');

  function onSelect(color) {
    setSelected(color)
  }

  return (
    <table className={styles.Table}>
      <tbody>
      {_.map(keys, (k, i) => {
        const shades = _.filter(colors, ({ name }) => name.includes(k));
        return (
          <tr key={k}>
            {_.map(shades, (c) => <Td key={c.name} c={c} selected={selected} onSelect={onSelect} />)}
            {i === 0 && (
              <Td rowspan={keys.length} key='white' c={{ value: '#fff' }} selected={selected} onSelect={onSelect} />
            )}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}


export default ContrastChecker;
