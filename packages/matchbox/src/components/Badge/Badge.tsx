import React from 'react';
import { margin, MarginProps } from 'styled-system';
import styled from 'styled-components';
import { pick } from '../../helpers/props';
import { Box } from '../Box';

const Wrapper = styled(Box)`
  ${margin}
  box-sizing: border-box;
`;

const bgMap = {
  lightGray: 'gray.200',
  darkGray: 'gray.300',
  green: 'green.300',
  blue: 'blue.300',
  red: 'red.300',
  white: 'transparent',
  black: 'transparent',
};

const colorMap = {
  lightGray: 'gray.900',
  darkGray: 'gray.900',
  green: 'green.900',
  blue: 'blue.800',
  red: 'red.800',
  white: 'white',
  black: 'gray.900',
};

const borderMap = {
  lightGray: 'gray.400',
  darkGray: 'gray.400',
  green: 'green.400',
  blue: 'blue.400',
  red: 'red.400',
  white: 'white',
  black: 'gray.900',
};

export type BadgeProps = MarginProps & {
  color?: 'lightGray' | 'darkGray' | 'green' | 'red' | 'blue' | 'white' | 'black';
  'data-id'?: string;
  children?: React.ReactNode;
  id?: string;
  tabIndex?: number;
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  props: BadgeProps,
  userRef,
) {
  const { children, color = 'lightGray', 'data-id': dataId, id, tabIndex, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  return (
    <Wrapper
      display="inline-block"
      borderRadius="pill"
      px="100"
      bg={bgMap[color]}
      color={colorMap[color]}
      borderWidth="100"
      borderStyle="solid"
      borderColor={borderMap[color]}
      fontSize="50"
      fontWeight="medium"
      lineHeight="calc(1rem - 2px)"
      id={id}
      data-id={dataId}
      tabIndex={tabIndex}
      ref={userRef}
      {...systemProps}
    >
      {children}
    </Wrapper>
  );
});

Badge.displayName = 'Badge';

export default Badge;
