import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../Text';

const Header = React.forwardRef(function Header(props, userRef) {
  const { as, looksLike } = props;

  return (
    <Text
      as={as}
      looksLike={looksLike}
      fontSize={!looksLike ? ['600', null, null, '700'] : null}
      lineHeight={!looksLike ? ['600', null, null, '700'] : null}
      mb={300}
      ref={userRef}
    >
      {props.children}
    </Text>
  );
});

Header.displayName = 'EmptyState.Header';

Header.defaultProps = {
  as: 'h1',
};

Header.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  looksLike: PropTypes.string,
};

export default Header;
