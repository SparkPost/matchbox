import React from 'react';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import TokenTable from '../tokens/TokenTable';
import { Button, Box } from '@sparkpost/matchbox';

// Omit base tokens because they are only used to indicate defaults in scss map formats
const omitBaseTokens = _.filter(meta, ({ name }) => !name.includes('base'));
const SIZES = _.filter(
  omitBaseTokens,
  size => size.category === 'font-size' && !size.name.includes('base')
).reverse();

const LINE_HEIGHTS = _.filter(omitBaseTokens, [
  'category',
  'line-height'
]).reverse();

const WEIGHTS = _.filter(omitBaseTokens, ['category', 'font-weight']);
const FAMILIES = _.filter(omitBaseTokens, ['category', 'font-family']);

function Group(props) {
  const { items, selected, onSelect, itemToLabel } = props;

  return (
    <Button.Group>
      {items.map(item => {
        const isSelected = [item.pixel_value, item.value, item.name].includes(
          selected
        );

        return (
          <Button
            key={item.name}
            onClick={() => onSelect(item)}
            outline={!isSelected}
          >
            {itemToLabel ? itemToLabel(item) : item.pixel_value || item.value}
          </Button>
        );
      })}
    </Button.Group>
  );
}

function TypographyExplorer() {
  const [size, setSize] = React.useState('16px');
  const [lh, setLh] = React.useState('20px');
  const [weight, setWeight] = React.useState('400');
  const [family, setFamily] = React.useState('font-family-sans');

  const selectedSize = _.find(SIZES, ['pixel_value', size]);
  const selectedHeight = _.find(LINE_HEIGHTS, ['pixel_value', lh]);
  const selectedWeight = _.find(WEIGHTS, ['value', weight]);
  const selectedFamily = _.find(FAMILIES, ['name', family]);

  function selectSizeAndHeight(item) {
    setSize(item.pixel_value);
    const variant = _.find(SIZES, ['pixel_value', item.pixel_value])
      .name.split('-')
      .pop();
    const newLh = _.find(LINE_HEIGHTS, ({ name }) => name.includes(variant));
    setLh(newLh.pixel_value);
  }

  function selectLineHeight(item) {
    setLh(item.pixel_value);
  }

  function selectWeight(item) {
    setWeight(item.value);
  }

  function selectFamily(item) {
    setFamily(item.name);
  }

  const tokensToRender = [
    selectedSize,
    selectedHeight,
    selectedWeight,
    selectedFamily
  ];

  return (
    <div>
      <Box
        as="textarea"
        resize="none"
        width={1}
        p="400"
        height="14rem"
        border="400"
        mb="400"
        defaultValue="You can click this text area and edit the text!"
        style={{
          fontSize: size,
          lineHeight: lh,
          fontWeight: weight,
          fontFamily: selectedFamily.value
        }}
      />

      <Box display="flex">
        <Box mr="500" mb="400">
          <Box fontWeight="medium" fontSize="200" lineHeight="200">
            Family
          </Box>
          <Box>
            <Group
              items={FAMILIES}
              onSelect={selectFamily}
              selected={family}
              itemToLabel={i => {
                const n = i.name.split('-').pop();
                return n.charAt(0).toUpperCase() + n.slice(1);
              }}
            />
          </Box>
        </Box>
        <Box mb="400">
          <Box fontWeight="medium" fontSize="200" lineHeight="200">
            Weight
          </Box>
          <Box>
            <Group items={WEIGHTS} onSelect={selectWeight} selected={weight} />
          </Box>
        </Box>
      </Box>

      <Box fontWeight="medium" fontSize="200" lineHeight="200">
        Sizes
      </Box>
      <Box mb="400">
        <Group items={SIZES} onSelect={selectSizeAndHeight} selected={size} />
      </Box>
      <Box fontWeight="medium" fontSize="200" lineHeight="200">
        Line Height
      </Box>
      <Box mb="400">
        <Group items={LINE_HEIGHTS} onSelect={selectLineHeight} selected={lh} />
      </Box>
      <hr />
      <TokenTable
        columns={['friendly', 'value', 'usage']}
        tokens={tokensToRender}
      />
    </div>
  );
}

export default TypographyExplorer;
