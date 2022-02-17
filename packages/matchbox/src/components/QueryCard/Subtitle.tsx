import React from 'react';
import { Text } from '../Text';

type QueryCardSubtitleProps = {
  children?: React.ReactNode;
};

const Subtitle = React.forwardRef<HTMLDivElement, QueryCardSubtitleProps>(function QueryCard(
  props,
  userRef,
) {
  const { children } = props;

  return (
    <Text fontSize="200" lineHeight="200" fontWeight="medium" color="gray.700" ref={userRef}>
      {children}
    </Text>
  );
});

Subtitle.displayName = 'QueryCard.Subtitle';
export default Subtitle;
