import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';

const StyledMedia = styled(Box)`
  figure,
  img {
    position: absolute;
    height: 100%;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Media = React.forwardRef(function Media(props, userRef) {
  const { children } = props;

  return <StyledMedia ref={userRef}>{children}</StyledMedia>;
});

Media.displayName = 'Banner.Media';
Media.propTypes = {
  children: PropTypes.node,
};

export default Media;
