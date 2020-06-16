import React from 'react';
import TokenUsage from '../tokens/TokenUsage';
import { tokens, meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import color from 'color';
import { Box } from '@sparkpost/matchbox';
import styled from 'styled-components';

const colors = meta.filter(({ type }) => type === 'color');
const palettes = {
  grayscale: _.filter(
    colors,
    ({ name }) =>
      name.includes('gray') &&
      (!name.includes('brand') || name.includes('white'))
  ),
  blue: _.filter(colors, ({ name }) => name.includes('color-blue')),
  red: _.filter(colors, ({ name }) => name.includes('color-red')),
  yellow: _.filter(colors, ({ name }) => name.includes('color-yellow')),
  magenta: _.filter(colors, ({ name }) => name.includes('color-magenta')),
  teal: _.filter(colors, ({ name }) => name.includes('color-teal')),
  green: _.filter(colors, ({ name }) => name.includes('color-green')),
  purple: _.filter(colors, ({ name }) => name.includes('color-purple')),
  brand: _.filter(colors, ({ name }) => name.includes('brand'))
};

const Shade = styled(Box)`
  ${({ selected }) => {
    if (selected) {
      return `
        font-weight: 600;
        transform: scale(1.02, 1.1);
      `;
    }
  }}

  padding: ${tokens.spacing_300};
  transition: 0.1s transform;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Palette(props) {
  const palette = React.useMemo(() => palettes[props.colors], [props.colors]);
  const [selected, setSelected] = React.useState(palette[0]);
  const colorInstance = color(selected.value);

  if (!palette.length) {
    return null;
  }

  return (
    <Box display="grid" gridGap="600" gridTemplateColumns="1fr 1fr" mb="600">
      <Box>
        {palette.map(c => (
          <Shade
            bg={c.value}
            key={c.name}
            textAlign="center"
            color={color(c.value).isDark() ? 'white' : 'gray.900'}
            selected={c.name === selected.name}
            role="button"
            onClick={() => setSelected(c)}
          >
            {c.friendly.replace('Color ', '')}
          </Shade>
        ))}
      </Box>
      <Box>
        <Box mb="300">
          <Box mb="100" fontWeight="medium">
            Hex
          </Box>
          <TokenUsage usage={selected.value} />
        </Box>

        <Box mb="300">
          <Box mb="0" fontWeight="medium">
            RGB
          </Box>
          <TokenUsage usage={colorInstance.rgb().string()} />
        </Box>

        <Box mb="300">
          <Box mb="0" fontWeight="medium">
            HSL
          </Box>
          <TokenUsage
            usage={colorInstance
              .hsl()
              .round()
              .string()}
          />
        </Box>

        <Box mb="300">
          <Box mb="0" fontWeight="medium">
            CSS
          </Box>
          <TokenUsage usage={selected.css} />
        </Box>

        <Box mb="300">
          <Box mb="0" fontWeight="medium">
            JS
          </Box>
          <TokenUsage usage={selected.javascript} />
        </Box>
        <Box mb="300">
          <Box mb="0" fontWeight="medium">
            Scss
          </Box>
          <TokenUsage usage={selected.scss} />
        </Box>
      </Box>
    </Box>
  );
}

export default Palette;
