import React from 'react';
import _ from 'lodash';
import color from 'color';
import { Box, Text } from '@sparkpost/matchbox';
import { meta } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const colorTokens = meta.filter(({ type }) => type === 'color');
const colors = colorTokens.filter(
  ({ type, name }) =>
    type === 'color' && (!name.includes('brand') || name.includes('white'))
);
const keys = [
  'gray',
  'red',
  'magenta',
  'purple',
  'blue',
  'teal',
  'green',
  'yellow'
];

function Td({ c, selected, onSelect, ...rest }) {
  const contrast = React.useMemo(
    () =>
      (
        Math.round(color(selected.value).contrast(color(c.value)) * 100) / 100
      ).toFixed(2),
    [selected.value, c.value]
  );

  return (
    <Box
      as="td"
      height="4rem"
      textAlign="center"
      onMouseOver={() => onSelect(c)}
      bg={c.value}
      {...rest}
    >
      <Text
        as="div"
        fontSize="100"
        fontWeight="medium"
        color={color(c.value).isDark() ? 'white' : 'gray.900'}
        opacity={contrast < 3 ? '0.3' : '1'}
      >
        {contrast}
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="100"
        fontWeight="semibold"
        color={color(c.value).isDark() ? 'white' : 'gray.900'}
      >
        {c.name ? c.name.split('-').pop() : 'White'}
      </Box>
    </Box>
  );
}

const StyledTd = styled(Td)`
  position: relative;

  & > div:last-child {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;

    & > div:first-child {
      opacity: 0;
    }

    & > div:last-child {
      opacity: 1;
    }
  }
`;

function ContrastChecker() {
  const [selected, setSelected] = React.useState('');

  function onSelect(c) {
    setSelected(c);
  }

  return (
    <Box as="table" style={{ tableLayout: 'fixed' }} width="100%" border="400">
      <tbody>
        {_.map(keys, (k, i) => {
          const shades = _.filter(colors, ({ name }) => name.includes(k));
          return (
            <tr key={k}>
              {_.map(shades, c => (
                <StyledTd
                  key={c.name}
                  c={c}
                  selected={selected}
                  onSelect={onSelect}
                />
              ))}
              {i === 0 && (
                <StyledTd
                  key="white"
                  c={{ value: 'white' }}
                  rowSpan={keys.length}
                  selected={selected}
                  onSelect={onSelect}
                />
              )}
            </tr>
          );
        })}
      </tbody>
    </Box>
  );
}

export default ContrastChecker;
