import React from 'react';
import type * as Polymorphic from '../../helpers/types';

import { Text } from '../Text';

type BaseProps = {
  children?: React.ReactNode;
  'data-id'?: string;
};

type SectionTitleProps<C extends React.ElementType> = Polymorphic.ComponentProps<C, BaseProps>;

const SectionTitle = <C extends React.ElementType>(props: SectionTitleProps<C>) => {
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
