import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';

const StyledKey = styled.kbd`
  position: relative;
  display: inline-block;
  padding: 0 ${tokens.spacing_100};
  height: ${tokens.sizing_450};

  background: ${tokens.color_gray_100};
  border-radius: 4px;
  border: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};

  color: ${tokens.color_gray_900};
  font-size: ${tokens.fontSize_100};
  line-height: ${tokens.lineHeight_100};

  box-shadow: 0px 3px 0px -1px ${tokens.color_gray_200}, 0px 3px 0px ${tokens.color_gray_400};
`;

export type KeyboardKeyProps = {
  children?: React.ReactNode;
};

const KeyboardKey = React.forwardRef<HTMLDivElement, KeyboardKeyProps>(function KeyboardKey(
  { children },
  ref,
) {
  return <StyledKey ref={ref}>{children}</StyledKey>;
});

KeyboardKey.displayName = 'KeyboardKey';

export default KeyboardKey;
