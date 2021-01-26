import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPropTypes } from '@styled-system/prop-types';
import { maxWidth } from 'styled-system';
import { Box } from '../Box';

const StyledMedia = styled(Box)`
  pointer-events: none;
`;

const Media = React.forwardRef(function Media(props, userRef) {
  const { children, className, maxWidth = '1100' } = props;

  return (
    <StyledMedia
      display="block"
      mx="auto"
      mb="400"
      width={['100%', '80%', '60%', '100%']}
      maxWidth={maxWidth}
      height="auto"
      className={className}
      ref={userRef}
    >
      {children}
    </StyledMedia>
  );
});

Media.displayName = 'EmptyState.Media';
Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...createPropTypes(maxWidth.propNames),
};

export default Media;
