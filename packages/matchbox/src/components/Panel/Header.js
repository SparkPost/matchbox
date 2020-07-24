import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';

const Header = React.forwardRef(function Header(props, userRef) {
  const { borderBottom, children, className } = props;
  const actions = getChild('Panel.Action', children);
  const title = excludeChild(['Panel.Action'], children);

  return (
    <Box
      borderBottom={borderBottom ? '400' : 'none'}
      className={className}
      p="500"
      pb={borderBottom ? '500' : '0'}
      ref={userRef}
      tabIndex="-1"
    >
      <Columns collapseBelow="xs" space="300">
        <Column>
          <Box fontSize="400" lineHeight="400" fontWeight="semibold">
            {title}
          </Box>
        </Column>
        <Column width="content">
          <Button.Group>{actions}</Button.Group>
        </Column>
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
