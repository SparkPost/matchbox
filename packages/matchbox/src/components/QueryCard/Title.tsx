import React from 'react';
import { Text } from '../Text';

export type QueryCardTitleProps = {
  children?: React.ReactNode;
};

const Title = React.forwardRef<HTMLDivElement, QueryCardTitleProps>(function QueryCard(
  props,
  userRef,
) {
  const { children } = props;

  return (
    <Text
      as="span"
      fontSize="200"
      lineHeight="200"
      fontWeight="medium"
      color="gray.900"
      ref={userRef}
    >
      {children}
    </Text>
  );
});

Title.displayName = 'QueryCard.Title';
export default Title;
