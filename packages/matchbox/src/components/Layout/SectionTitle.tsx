import React from 'react';

import { Text } from '../Text';

interface Props<C extends React.ElementType> {
  /**
   * An override of the default HTML tag.
   * Can also be another React component. 😉
   */
  as?: C;

  children?: React.ReactNode;
  'data-id'?: string;
}

type SectionTitleProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

const SectionTitle = <C extends React.ElementType = 'h2'>(props: SectionTitleProps<C>) => {
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
