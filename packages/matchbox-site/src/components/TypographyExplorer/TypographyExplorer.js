import React from 'react';
import tokens from '@sparkpost/design-tokens/dist/index.meta.json';
import { TokenUsage } from '../';
import _ from 'lodash';
import styles from './TypographyExplorer.module.scss';

const SIZES = _.filter(tokens, (size) => size.category === 'font-size' && !size.name.includes('base')).reverse();

const LINE_HEIGHTS = _.filter(tokens, (size) => size.category === 'line-height').reverse();

const WEIGHTS = [
  { value: '300', name: 'Light' },
  { value: '400', name: 'Normal' },
  { value: '500', name: 'Medium' },
  { value: '600', name: 'Semi Bold' }
];

function Group(props) {
  const { items, selected, onSelect } = props;

  return items.map((item) => (
    <button
      disabled={selected === item.pixel_value || selected === item.value}
      key={item.name}
      onClick={() => onSelect(item)}>
      {item.pixel_value || item.value}
    </button>
  ));
}

function TypographyExplorer() {
  const [type, setType] = React.useState('scss');
  const [size, setSize] = React.useState('16px');
  const [lh, setLh] = React.useState('24px');
  const [weight, setWeight] = React.useState('400');

  const selectedSize = _.find(SIZES, ['pixel_value', size]);
  const selectedHeight = _.find(LINE_HEIGHTS, ['pixel_value', lh]);

  function selectSizeAndHeight(item) {
    setSize(item.pixel_value);
    const variant = _.find(SIZES, ['pixel_value', item.pixel_value]).name.split('-').pop();
    const newLh = _.find(LINE_HEIGHTS, ({ name }) => name.includes(variant));
    setLh(newLh.pixel_value);
  }

  function selectLineHeight(item) {
    setLh(item.pixel_value);
  }

  function selectWeight(item) {
    setWeight(item.value);
  }

  function handleTypeSelect(e) {
    setType(e.target.value);
  }

  // TODO: Temporary styling & layout pending final designs

  return (
    <div>
      <textarea
        className={styles.TextArea}
        defaultValue='You can click this text area and edit the text!'
        style={{
          fontSize: size,
          lineHeight: lh,
          fontWeight: weight
        }}
      />

      <h4>Weight</h4>
      <p>
        <Group items={WEIGHTS} onSelect={selectWeight} selected={weight} />
      </p>

      <h4>Sizes</h4>
      <p>
        <Group items={SIZES} onSelect={selectSizeAndHeight} selected={size} />
      </p>

      <h4>Line Height</h4>
      <p>
        <Group items={LINE_HEIGHTS} onSelect={selectLineHeight} selected={lh} />
      </p>

      <hr/>

      <h4>Tokens</h4>
      <select onChange={handleTypeSelect} value={type} >
        <option value='scss'>Scss</option>
        <option value='css'>CSS</option>
        <option value='javascript'>Javascript</option>
      </select>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0', alignItems: 'center' }}>
        <div>
          Font Size
        </div>
        <div>
          <TokenUsage usage={selectedSize[type]}/>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0', alignItems: 'center' }}>
        <div>
          Line Height
        </div>
        <div>
          <TokenUsage usage={selectedHeight[type]}/>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          Font Weight
        </div>
        <div>
          <TokenUsage usage={weight}/>
        </div>
      </div>

    </div>
  );
}

export default TypographyExplorer;
