import React from 'react';

import { Text } from '../Text';

function SectionTitle(props) {
  const { children } = props;

  return (
    <Text as="h4" fontSize={['300', null, '400']} pb="300">
      {children}
    </Text>
  );
}

SectionTitle.displayName = 'Layout.SectionTitle';

export default SectionTitle;
