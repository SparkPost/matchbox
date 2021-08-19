import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

const StyledText = styled(Box)`
  a,
  a:visited {
    color: ${tokens.color_gray_700};
  }
`;

type HelpTextProps = Pick<React.ComponentProps<typeof Box>, 'id' | 'children' | 'ml' | 'mt'>;

function HelpText(props: HelpTextProps): JSX.Element {
  const { id, children, ml = '0', mt = '100' } = props;
  return (
    <StyledText id={id} fontSize="200" lineHeight="200" m="0" ml={ml} mt={mt} color="gray.700">
      {children}
    </StyledText>
  );
}

HelpText.displayName = 'HelpText';

export default HelpText;
