import React from 'react';

import { Text } from '../Text';

type BaseProps = {
  children?: React.ReactNode;
  'data-id'?: string;
  as?: React.ElementType;
};

const SectionTitle = (props: BaseProps) => {
  const { children, as = 'h2' } = props;

  return (
    <Text
      as={as}
      fontSize={['300', null, '400']}
      lineHeight={['300', null, '400']}
      pb="300"
      data-id={props['data-id']}
    >
      {children}
    </Text>
  );
};

SectionTitle.displayName = 'Layout.SectionTitle';

export default SectionTitle;
