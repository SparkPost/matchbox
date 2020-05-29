import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, WindowEvent } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { DragHandle } from '@sparkpost/matchbox-icons';

const StyledContainer = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
  background: ${tokens.color_white};
  border: 6px solid ${tokens.color_gray_200};
`;

const StyledResize = styled(Box)`
  position: absolute;
  top: -6px;
  right: -6px;
  bottom: -6px;
  background: ${tokens.color_blue_1000};
  color: white;
  cursor: ew-resize;
  transition: background ${tokens.motionDuration_fast}
    ${tokens.motionEase_in_out};

  &:hover {
    background: ${tokens.color_blue_800};
    box-shadow: ${tokens.boxShadow_200};
  }
`;

const StyledDragHandle = styled(DragHandle)`
  transform-origin: 50% 50%;
  transform: rotate(90deg);
`;

function ResizeContainer(props) {
  const { children, minWidth } = props;

  const [position, setPosition] = useState({});
  const [dragging, setDragging] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');

  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef && contentRef.current) {
      console.log(contentRef.current.getBoundingClientRect());
      setContentHeight(contentRef.current.getBoundingClientRect().height);
    }
  }, []);

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
    const rect = containerRef.current.getBoundingClientRect();
    let width = clientX - rect.x + 20; // 20 offsets the width of the handle

    if (width >= position.originalWidth) {
      return position.originalWidth;
    }

    if (width <= minWidth) {
      return minWidth;
    }

    return width;
  }

  // Resets position when window resizes
  function handleResize() {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ ...position, width: rect.width, originalWidth: rect.width });
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
      position="relative"
      mb={500}
      // Appending px to avoid conflicting with token names
      height={`${contentHeight}px`}
      ref={containerRef}
    >
      <WindowEvent event="mousemove" handler={onMouseMove} />
      <WindowEvent event="mouseup" handler={onMouseUp} />
      <WindowEvent event="resize" handler={handleResize} />
      <StyledContainer
        padding={400}
        flex="1"
        ref={contentRef}
        width={`${position.width}px`}
      >
        {children}
        <StyledResize
          onMouseDown={onMouseDown}
          padding={100}
          display="flex"
          alignItems="center"
        >
          <StyledDragHandle size={24} />
        </StyledResize>
      </StyledContainer>
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
