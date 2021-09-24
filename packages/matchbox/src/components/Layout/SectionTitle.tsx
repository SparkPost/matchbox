import React from 'react';
import { Text } from '../Text';

export type LayoutSectionTitleProps = {
  children?: React.ReactNode;
  'data-id'?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const SectionTitle = (props: LayoutSectionTitleProps): JSX.Element => {
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
