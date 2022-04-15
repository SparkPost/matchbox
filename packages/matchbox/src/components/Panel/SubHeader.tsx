import React from 'react';
import Panel from './Panel';
import { Box } from '../Box';
import { PanelPaddingContext, PanelAppearanceContext } from './context';
import { Headings } from '../../helpers/types';

export type PanelSubHeaderProps = Pick<
  React.ComponentProps<typeof Panel>,
  'appearance' | 'className' | 'children'
> & {
  as?: Headings;
};

const SubHeader = React.forwardRef<HTMLDivElement, PanelSubHeaderProps>(function SubHeader(
  props,
  userRef,
) {
  const { as = 'h4', children, className, appearance } = props;

  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = appearance || React.useContext(PanelAppearanceContext);

  return (
    <Box
      as={as}
      {...paddingContext}
      className={className}
      pb={[0, null, 0]}
      fontSize="300"
      fontWeight="normal"
      lineHeight="300"
      color={appearanceContext === 'inverted' ? 'gray.300' : 'gray.700'}
      bg={appearanceContext === 'inverted' ? 'gray.900' : ''}
      tabIndex={-1}
      ref={userRef}
    >
      {children}
    </Box>
  );
});

SubHeader.displayName = 'Panel.SubHeader';

export default SubHeader;
