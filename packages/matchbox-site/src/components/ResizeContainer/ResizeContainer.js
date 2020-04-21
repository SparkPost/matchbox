import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, WindowEvent } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { ChevronLeft } from '@sparkpost/matchbox-icons';

const StyledContainer = styled(Box)`
  background: ${tokens.color_white};
  border: 6px solid ${tokens.color_gray_200};
`;

const StyledResize = styled(Box)`
  background: ${tokens.color_blue_1000};
  color: white;
  cursor: pointer;
`;

function ResizeContainer(props) {
  const { children, minWidth } = props;

  const [position, setPosition] = useState({});
  const [dragging, setDragging] = useState(false);

  let containerRef = useRef();

  useEffect(() => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: rect.x,
      width: rect.width,
      originalWidth: rect.width,
      left: rect.left
    });
  }, []);

  function onMouseMove({ clientX }) {
    if (
      dragging &&
      position.width <= position.originalWidth &&
      position.width > minWidth
    ) {
      setPosition({
        ...position,
        width: clientX - position.x
      });
    }
  }

  function onMouseDown() {
    setDragging(true);
  }

  function onMouseUp() {
    setDragging(false);
  }

  return (
    <Box
      boxShadow="400"
      display="flex"
      mb={500}
      width={position.width}
      ref={containerRef}
    >
      <WindowEvent event="mousemove" handler={onMouseMove} />
      <WindowEvent event="mouseup" handler={onMouseUp} />
      <StyledContainer padding={400} flex="1">
        {children}
      </StyledContainer>
      <StyledResize
        onMouseDown={onMouseDown}
        padding={100}
        display="flex"
        alignItems="center"
      >
        <ChevronLeft size={24} />
      </StyledResize>
    </Box>
  );
}

ResizeContainer.displayName = 'ResizeContainer';
ResizeContainer.propTypes = {
  children: PropTypes.node,
  minWidth: PropTypes.string
};
ResizeContainer.defaultProps = {
  minWidth: '600'
};

export default ResizeContainer;
