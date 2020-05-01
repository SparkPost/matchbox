import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, WindowEvent } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { DragHandle } from '@sparkpost/matchbox-icons';

const StyledContainer = styled(Box)`
  background: ${tokens.color_white};
  border: 6px solid ${tokens.color_gray_200};
`;

const StyledResize = styled(Box)`
  background: ${tokens.color_blue_1000};
  color: white;
  cursor: ew-resize;
`;

const StyledDragHandle = styled(DragHandle)`
  transform-origin: 50% 50%;
  transform: rotate(90deg);
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

  function calculateWidth(clientX) {
    let width = clientX - position.x;

    if (width >= position.originalWidth) {
      return position.originalWidth;
    }

    if (width <= minWidth) {
      return minWidth;
    }

    return width;
  }

  function onMouseMove({ clientX }) {
    if (dragging) {
      setPosition({
        ...position,
        width: calculateWidth(clientX)
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
        <StyledDragHandle size={24} />
      </StyledResize>
    </Box>
  );
}

ResizeContainer.displayName = 'ResizeContainer';
ResizeContainer.propTypes = {
  children: PropTypes.node,
  minWidth: PropTypes.number
};
ResizeContainer.defaultProps = {
  minWidth: 400
};

export default ResizeContainer;
