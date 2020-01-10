import React from 'react';
import Token from '../tokens/Token';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import color from 'color';
import { Box, Text } from '@sparkpost/matchbox';

function ColorDescription(props) {
  const c = React.useMemo(() => _.find(meta, ['name', props.name]), [props.name]);

  const isWhite = React.useMemo(() => props.name === 'color-white', [props.name]);

  return (
    <Box mb='400'>
      <Box
        mb='300'
        height='150px'
        p='300'
        bg={c.value}
        border={isWhite ? '400' : 'none'}
        borderRadius='200'
        display='flex'
        justifyContent='flex-start'
        alignItems='flex-end'
      >
        <Box
          fontSize='100'
          lineHeight='100'
          color={color(c.value).isDark() ? 'white' : 'gray.1000'}
        >
          {color(c.value).rgb().string()}, {c.value}
        </Box>
      </Box>
      {props.title ? (
        <Text
          fontSize='300'
          lineHeight='300'
          m='0'
          fontWeight='medium'
          color='gray.900'
        >
          <div>
            {props.title} <Box as='span' display='inline-block' fontSize='200' ml='200'><Token name={c.name} /></Box>
          </div>
        </Text>
      ) : null}
      {!props.title ? <Token name={c.name} /> : null}

      {props.children && (
        <Box mt='100' fontSize='200' lineHeight='200' color='gray.700'>
          {props.children}
        </Box>
      )}
    </Box>
  );
}

export default ColorDescription;
