import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';
import { PanelPaddingContext } from './context';

const Header = React.forwardRef(function Header(props, userRef) {
  const { borderBottom, children, className } = props;
  const actions = getChild('Panel.Action', children);
  const title = excludeChild(['Panel.Action'], children);
  const paddingContext = React.useContext(PanelPaddingContext);

  return (
    <Box
      borderBottom={borderBottom ? '400' : 'none'}
      className={className}
      {...paddingContext}
      // The array is a hack to override responsive padding context
      // First null to inherit padding context
      pb={borderBottom ? null : [0, null, 0]}
      ref={userRef}
      tabIndex="-1"
    >
      <Columns collapseBelow="xs" space="300" alignY="top" align="right">
        <Column>
          <Box fontSize="400" lineHeight="400" fontWeight="semibold">
            {title}
          </Box>
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
Header.propTypes = {
  borderBottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
