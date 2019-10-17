import React from 'react';
import TokenUsage from '../tokens/TokenUsage';
// import tokens from '@sparkpost/design-tokens/dist/index.meta.json';
import tokens from './unpublished.js';
import _ from 'lodash';
import color from 'color';
import classnames from 'classnames';
import styles from './Palettes.module.scss';

const colors = tokens.filter(({ type, name }) => type === 'color' && !name.includes('base') || name.includes('white'));

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
  const palettes = _.filter(colors, ({ name }) => !name.includes('gray') && !name.includes('brand') && !name.includes('white'));
  const brand = _.filter(colors, ({ name }) => name.includes('brand'));

  return (
    <div>
      <div className={styles.Palettes}>
        <h3>Gray</h3>
        <Palette colors={grayscale} />

        <h3>Red</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('red'))} />

        <h3>Magenta</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('magenta'))} />

        <h3>Purple</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('purple'))} />

        <h3>Blue</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('blue'))} />

        <h3>Teal</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('teal'))} />

        <h3>Green</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('green'))} />

        <h3>Yellow</h3>
        <Palette colors={_.filter(palettes, ({ name }) => name.includes('yellow'))} />

        <h3>Brand</h3>
        <Palette colors={brand} />

      </div>
    </div>
  );
}

export default Palettes;
