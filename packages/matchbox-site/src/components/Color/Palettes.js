import React from 'react';
import TokenUsage from '../tokens/TokenUsage';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import color from 'color';
import classnames from 'classnames';
import styles from './Palettes.module.scss';

const colors = meta.filter(({ type }) => type === 'color');

function Palette(props) {
  const [selected, setSelected] = React.useState(props.colors[0]);
  const colorInstance = color(selected.value);

  return (
    <div className={styles.Palette}>
      <div className={styles.Colors}>
        {props.colors.map((c) => (
          <div
            key={c.name}
            className={classnames(
              styles.Color,
              selected.name === c.name && styles.selected,
              color(c.value).isDark() && styles.dark
            )}
            style={{ background: c.value }}
            role='button'
            onClick={() => setSelected(c)}
          >
            {c.friendly}
          </div>
        ))}
      </div>
      <div className={styles.Usage}>
        <div>
          <strong>Hex</strong>
          <TokenUsage usage={selected.value}/>
        </div>

        <div>
          <strong>RGB</strong>
          <TokenUsage usage={colorInstance.rgb().string()}/>
        </div>

        <div>
          <strong>HSL</strong>
          <TokenUsage usage={colorInstance.hsl().round().string()}/>
        </div>

        <div>
          <strong>CSS</strong>
          <TokenUsage usage={selected.css}/>
        </div>

        <div>
          <strong>JS</strong>
          <TokenUsage usage={selected.javascript}/>
        </div>
        <div>
          <strong>Scss</strong>
          <TokenUsage usage={selected.scss}/>
        </div>
      </div>
    </div>
  );
}

function Palettes(props) {
  const grayscale = _.filter(colors, ({ name }) => name.includes('gray') && !name.includes('brand') || name.includes('white'));
  const core = _.filter(colors, ({ name }) => !name.includes('gray') && !name.includes('brand') && !name.includes('white'));
  const brand = _.filter(colors, ({ name }) => name.includes('brand'));

  return (
    <div>
      <div className={styles.Palettes}>
        <h3>Core</h3>
        <Palette colors={core} />

        <h3>Gray</h3>
        <Palette colors={grayscale} />

        <h3>Brand</h3>
        <Palette colors={brand} />

      </div>
    </div>
  );
}

export default Palettes;
