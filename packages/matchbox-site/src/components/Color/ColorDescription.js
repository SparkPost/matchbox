import React from 'react';
import Token from '../tokens/Token';
import { meta } from '@sparkpost/design-tokens';
import _ from 'lodash';

import { Box, Text } from '@sparkpost/matchbox';

function ColorDescription(props) {
  const c = React.useMemo(() => _.find(meta, ['name', props.name]), [props.name]);

  const isWhite = React.useMemo(() => props.name === 'color-white', [props.name]);

  return (
    <Box mb='400'>
      <Box
        mb='300'
        height='150px'
        bg={c.value}
        border={isWhite ? '400' : 'none'}
        borderRadius='200'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
      </Box>
      {props.title && (
        <Text
          fontSize='300'
          lineHeight='300'
          m='0'
          fontWeight='medium'
          color='gray.900'
        >
          {props.title}
        </Text>
      )}
      <Token name={c.name} />
      {props.children && (
        <Box mt='100' fontSize='200' lineHeight='200' color='gray.700'>
          {props.children}
        </Box>
      )}
    </Box>
  );
}

export default ColorDescription;
