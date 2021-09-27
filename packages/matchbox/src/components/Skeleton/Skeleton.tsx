import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import styled, { keyframes } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { Stack } from '../Stack';

const Shimmer = keyframes`
  from { opacity: 0.5 }
  to { opacity: 1; }
`;

export const Animator = styled(Box)<Omit<BoxProps, 'as'>>`
  border-radius: ${tokens.borderRadius_200};
  position: relative;
  overflow: hidden;
  background: ${tokens.color_gray_300};
  opacity: 0.5;
  animation: ${tokens.motionDuration_slow} infinite alternate ${Shimmer} ${tokens.motionEase_in_out};
  will-change: opacity;
`;

export type SkeletonHeaderProps = {
  'data-id'?: string;
  looksLike?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  width?: string;
};

const SkeletonHeader = React.forwardRef<HTMLDivElement, SkeletonHeaderProps>(
  function SkeletonHeader(props, ref) {
    const { 'data-id': dataId, looksLike = 'h3', width = '900' } = props;
    const delay = React.useMemo(() => `${Math.random() / 2}s`, []);

    const size = React.useMemo(() => {
      switch (looksLike) {
        case 'h1':
          return '700';
        case 'h2':
          return '600';
        case 'h3':
          return '500';
        case 'h4':
          return '400';
        case 'h5':
          return '300';
        case 'h6':
          return '200';
        default:
          break;
      }
    }, [looksLike]);

    return (
      <Box ref={ref} tabIndex={-1} aria-hidden="true" data-id={dataId}>
        <Animator
          borderRadius="200"
          height={tokens[`lineHeight_${size}`]}
          maxWidth={width}
          style={{
            animationDelay: delay,
          }}
        />
      </Box>
    );
  },
);

SkeletonHeader.displayName = 'Skeleton.Header';

export type SkeletonBodyProps = {
  'data-id'?: string;
  lines?: number;
};

const SkeletonBody = React.forwardRef<HTMLDivElement, SkeletonBodyProps>(function SkeletonBody(
  props,
  ref,
) {
  const { 'data-id': dataId, lines = 3 } = props;

  const body = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < lines; i++) {
      arr.push(
        <Animator
          key={i}
          borderRadius="200"
          style={{
            animationDelay: `${i * 0.3}s`,
          }}
          height="300"
          width={i === lines - 1 ? '70%' : ''}
        />,
      );
    }
    return arr;
  }, [lines]);

  return (
    <Box ref={ref} mt="100" tabIndex={-1} aria-hidden="true" data-id={dataId}>
      <Stack space="300">{body}</Stack>
    </Box>
  );
});

SkeletonBody.displayName = 'Skeleton.Body';

export type SkeletonBoxProps = Omit<BoxProps, 'as'> & {
  'data-id'?: string;
};

const SkeletonBox = React.forwardRef<HTMLDivElement, SkeletonBoxProps>(function SkeletonBox(
  props,
  ref,
) {
  const { 'data-id': dataId, children, ...rest } = props;
  const delay = React.useMemo(() => `${Math.random() / 2}s`, []);

  return (
    <Box ref={ref} tabIndex={-1} aria-hidden="true" data-id={dataId}>
      <Animator
        {...rest}
        style={{
          animationDelay: delay,
        }}
      />
    </Box>
  );
});

SkeletonBox.displayName = 'Skeleton.Box';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Skeleton(): null {
  return null;
}

Skeleton.Header = SkeletonHeader;
Skeleton.Box = SkeletonBox;
Skeleton.Body = SkeletonBody;

export default Skeleton;
