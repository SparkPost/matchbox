import React from 'react';
import Proptypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled, { keyframes } from 'styled-components';
import { Box } from '../Box';
import { Stack } from '../Stack';

const Shimmer = keyframes`
  from { opacity: 0.5 }
  to { opacity: 1; }
`;

export const Animator = styled(Box)`
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    background: ${tokens.color_gray_300};
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    animation: ${tokens.motionDuration_slow} infinite alternate ${Shimmer}
      ${tokens.motionEase_in_out};
    animation-delay: ${props => props.delay};
    will-change: opacity;
  }
`;

const SkeletonHeader = React.forwardRef(function SkeletonHeader(props, ref) {
  const { 'data-id': dataId, looksLike, width } = props;
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
    <Box ref={ref} tabIndex="-1" aria-hidden="true" data-id={dataId}>
      <Animator
        borderRadius="200"
        delay={delay}
        height={tokens[`lineHeight_${size}`]}
        maxWidth={width}
      />
    </Box>
  );
});

SkeletonHeader.displayName = 'Skeleton.Header';
SkeletonHeader.propTypes = {
  'data-id': Proptypes.string,
  looksLike: Proptypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  width: Proptypes.string,
};
SkeletonHeader.defaultProps = {
  looksLike: 'h3',
  width: '900',
};

const SkeletonBody = React.forwardRef(function SkeletonBody(props, ref) {
  const { 'data-id': dataId, lines } = props;

  const body = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < lines; i++) {
      arr.push(
        <Animator
          key={i}
          borderRadius="200"
          delay={`${i * 0.3}s`}
          height="300"
          width={i === lines - 1 ? '70%' : ''}
        />,
      );
    }
    return arr;
  }, [lines]);

  return (
    <Box ref={ref} mt="100" tabIndex="-1" aria-hidden="true" data-id={dataId}>
      <Stack space="300">{body}</Stack>
    </Box>
  );
});

SkeletonBody.displayName = 'Skeleton.Body';
SkeletonBody.propTypes = {
  'data-id': Proptypes.string,
  lines: Proptypes.number,
};
SkeletonBody.defaultProps = {
  lines: 3,
};

const SkeletonBox = React.forwardRef(function SkeletonBox(props, ref) {
  const { 'data-id': dataId, children, ...rest } = props;

  const delay = React.useMemo(() => `${Math.random() / 2}s`, []);
  return (
    <Box ref={ref} tabIndex="-1" aria-hidden="true" data-id={dataId}>
      <Animator borderRadius="200" delay={delay} {...rest} />
    </Box>
  );
});

SkeletonBox.displayName = 'Skeleton.Box';
SkeletonBox.propTypes = {
  'data-id': Proptypes.string,
  ...Box.propTypes,
};

function Skeleton() {
  return null;
}

Skeleton.Header = SkeletonHeader;
Skeleton.Box = SkeletonBox;
Skeleton.Body = SkeletonBody;

export default Skeleton;
