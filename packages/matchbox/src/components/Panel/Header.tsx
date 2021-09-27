import React from 'react';
import Panel from './Panel';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';
import { PanelPaddingContext, PanelAppearanceContext } from './context';
import { Headings } from '../../helpers/types';

export type PanelHeaderProps = Pick<
  React.ComponentProps<typeof Panel>,
  'appearance' | 'children' | 'className'
> & {
  as?: Headings;
  borderBottom?: boolean;
};

const Header = React.forwardRef<HTMLDivElement, PanelHeaderProps>(function Header(props, userRef) {
  const { as = 'h3', appearance, borderBottom, children, className } = props;
  const actions = getChild('Panel.Action', children);
  const title = excludeChild(['Panel.Action'], children);
  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = appearance || React.useContext(PanelAppearanceContext);

  return (
    <Box
      borderBottom={borderBottom ? '300' : 'none'}
      className={className}
      {...paddingContext}
      // The array is a hack to override responsive padding context
      // First null to inherit padding context
      pb={borderBottom ? null : [0, null, 0]}
      ref={userRef}
      tabIndex={-1}
      color={appearanceContext === 'inverted' ? 'white' : ''}
      bg={appearanceContext === 'inverted' ? 'gray.900' : ''}
    >
      <Columns collapseBelow="xs" space="300" alignY="top" align="right">
        <Column>
          <Text as={as} fontSize="400" lineHeight="400" fontWeight="semibold">
            {title}
          </Text>
        </Column>
        {actions.length ? (
          <Column width="content">
            <Button.Group>{actions}</Button.Group>
          </Column>
        ) : null}
      </Columns>
    </Box>
  );
});

Header.displayName = 'Panel.Header';

export default Header;
