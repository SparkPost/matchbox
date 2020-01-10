import React from 'react';
import copy from 'copy-to-clipboard';
import { Box } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const StyledUsage = styled(Box)`
  display: inline-block;
  color: ${tokens.color_gray_800};
  background: ${tokens.color_gray_200};
  padding: ${tokens.spacing_100} ${tokens.spacing_200};
  border-radius: ${tokens.borderRadius_200};
  transition: 0.15s;

  &:hover {
    cursor: pointer;
    background: ${tokens.color_gray_300};
    color: ${tokens.color_gray_1000};
  }
`;

function TokenUsage(props) {
  const [clicked, setClicked] = React.useState(false);

  function handleClick() {
    copy(props.usage);
    setClicked(true);
  }

  React.useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [clicked]);

  return (
    <StyledUsage onClick={handleClick}>
      <code>{clicked ? 'Copied!' : props.usage}</code>
    </StyledUsage>
  );
}

export default TokenUsage;
