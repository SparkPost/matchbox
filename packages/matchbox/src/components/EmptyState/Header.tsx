import React from 'react';
import { Text, TextProps } from '../Text';
import { Headings } from '../../helpers/types';

type EmptyStateHeaderProps = Pick<TextProps, 'looksLike'> & {
  as?: Headings;
};

const Header = React.forwardRef<HTMLHeadingElement, EmptyStateHeaderProps>(function Header(
  props,
  userRef,
) {
  const { as = 'h1', looksLike } = props;

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
export default Header;
