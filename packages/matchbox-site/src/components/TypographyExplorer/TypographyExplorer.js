import React from 'react';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import styles from './TypographyExplorer.module.scss';
import TokenTable from '../tokens/TokenTable';
import { Box } from '@sparkpost/matchbox';

// Omit base tokens because they are only used to indicate defaults in scss map formats
const omitBaseTokens = _.filter(meta, ({ name }) => !name.includes('base'));
const SIZES = _.filter(omitBaseTokens, (size) => size.category === 'font-size' && !size.name.includes('base')).reverse();
const LINE_HEIGHTS = _.filter(omitBaseTokens, (size) => size.category === 'line-height').reverse();
const WEIGHTS = _.filter(omitBaseTokens, (size) => size.category === 'font-weight');

function TemporaryButton(props) {
  return (
    <Box
      as='button'
      bg={props.disabled ? 'blue.700' : 'white'}
      color={props.disabled ? 'white' : 'gray.700'}
      border={!props.disabled ? '400' : '1px solid transparent'}
      mr='-1px'
      fontSize='200'
      py='100'
      px='400'
      {...props}
    />
  );
}

function Group(props) {
  const { items, selected, onSelect } = props;

  return items.map((item) => (
    <TemporaryButton
      disabled={selected === item.pixel_value || selected === item.value}
      key={item.name}
      onClick={() => onSelect(item)}>
      {item.pixel_value || item.value}
    </TemporaryButton>
  ));
}

function TypographyExplorer() {

  const [size, setSize] = React.useState('16px');
  const [lh, setLh] = React.useState('24px');
  const [weight, setWeight] = React.useState('400');

  const selectedSize = _.find(SIZES, ['pixel_value', size]);
  const selectedHeight = _.find(LINE_HEIGHTS, ['pixel_value', lh]);
  const selectedWeight = _.find(WEIGHTS, ['value', weight]);

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
    selectedWeight
  ];

  return (
    <div>
      <textarea
        className={styles.TextArea}
        defaultValue='You can click this text area and edit the text!'
        style={{
          fontSize: size,
          lineHeight: lh,
          fontWeight: weight,
          marginBottom: '1rem'
        }}
      />

      <strong>Weight</strong>
      <p>
        <Group items={WEIGHTS} onSelect={selectWeight} selected={weight} />
      </p>

      <strong>Sizes</strong>
      <p>
        <Group items={SIZES} onSelect={selectSizeAndHeight} selected={size} />
      </p>

      <strong>Line Height</strong>
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
