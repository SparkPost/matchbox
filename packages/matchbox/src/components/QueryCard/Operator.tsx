import React from 'react';
import { Text } from '../Text';

type QueryCardOperatorProps = {
  children?: React.ReactNode;
};

const Operator = React.forwardRef<HTMLDivElement, QueryCardOperatorProps>(function QueryCard(
  props,
  userRef,
) {
  const { children } = props;

  return (
    <Text as="span" fontSize="200" fontWeight="normal" color="gray.700" ref={userRef}>
      {children}
    </Text>
  );
});

Operator.displayName = 'QueryCard.Operator';
export default Operator;
