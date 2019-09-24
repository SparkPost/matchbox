import React from 'react';
import tokens from '@sparkpost/design-tokens/dist/index.meta.json';
import _ from 'lodash';
import styles from './TypographyExplorer.module.scss';
import TokenTable from '../tokens/TokenTable';

// Omit base tokens because they are only used to indicate defaults in scss map formats
const omitBaseTokens = _.filter(tokens, ({ name }) => !name.includes('base'));
const SIZES = _.filter(omitBaseTokens, (size) => size.category === 'font-size' && !size.name.includes('base')).reverse();
const LINE_HEIGHTS = _.filter(omitBaseTokens, (size) => size.category === 'line-height').reverse();

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

  const tokensToRender = [
    selectedSize, selectedHeight,
    {
      friendly: 'Font Weight',
      value: weight
    }
  ];

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
      <TokenTable
        columns={['friendly', 'value', 'usage']}
        tokens={tokensToRender}
      />

    </div>
  );
}

export default TypographyExplorer;
