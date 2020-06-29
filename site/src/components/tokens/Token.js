import React from 'react';
import { meta } from '@sparkpost/design-tokens';
import { Tooltip, Box } from '@sparkpost/matchbox';
import _ from 'lodash';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';

import { token, color } from './tokenStyle';

const StyledToken = styled('span')`
  ${token}
`;

const StyledColor = styled(Box)`
  ${color}
`;

function Token(props) {
  const { name } = props;
  const [clicked, setClicked] = React.useState(false);
  const token = _.find(meta, ['name', name]);

  const isWhite = React.useMemo(() => name === 'color-white', [name]);

  function handleClick() {
    copy(token.value);
    setClicked(true);
  }

  React.useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [clicked]);

  function getPrefix() {
    switch (token.type) {
      case 'color':
        return (
          <StyledColor
            border={isWhite ? '400' : 'none'}
            bg={token.value}
            as="span"
          ></StyledColor>
        );
      default:
        return '';
    }
  }

  const friendly = React.useMemo(() => {
    if (token.friendly.includes('Color')) {
      return token.friendly.replace('Color ', '');
    }
    return token.friendly;
  }, [token.friendly]);

  if (!token) {
    return <StyledToken>Token Not Found</StyledToken>;
  }

  return (
    <Tooltip
      id={token.name}
      bg="gray.1000"
      width="auto"
      content={clicked ? 'Copied' : token.value}
    >
      <StyledToken onClick={handleClick}>
        {getPrefix()}
        {friendly}
      </StyledToken>
    </Tooltip>
  );
}

export default Token;
