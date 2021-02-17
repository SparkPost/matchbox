import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';
import { PanelPaddingContext, PanelAppearanceContext } from './context';

const Header = React.forwardRef(function Header(props, userRef) {
  const { as, borderBottom, children, className } = props;
  const actions = getChild('Panel.Action', children);
  const title = excludeChild(['Panel.Action'], children);
  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = React.useContext(PanelAppearanceContext);

  return (
    <Box
      borderBottom={borderBottom ? '300' : 'none'}
      className={className}
      {...paddingContext}
      // The array is a hack to override responsive padding context
      // First null to inherit padding context
      pb={borderBottom ? null : [0, null, 0]}
      ref={userRef}
      tabIndex="-1"
      color={appearanceContext === 'inverted' ? 'white' : ''}
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
Header.defaultProps = {
  as: 'h3',
};
Header.propTypes = {
  as: PropTypes.string,
  borderBottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
