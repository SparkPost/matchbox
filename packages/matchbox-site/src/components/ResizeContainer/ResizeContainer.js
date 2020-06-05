import React, { useRef, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { Box, WindowEvent, ThemeProvider } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { DragHandle } from '@sparkpost/matchbox-icons';
import _ from 'lodash';

const StyledContainer = styled(Box)`
  position: relative;
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
  const { children, minWidth, disableResize } = props;

  const [position, setPosition] = useState({});
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef();

  useLayoutEffect(() => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      width: rect.width,
      originalWidth: rect.width
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

    // This is a hack, need components to behave when they resize independent of window resize
    if (window !== 'undefined') {
      window.dispatchEvent(new Event('resize'));
    }
  }

  function onResize(e) {
    if (!dragging) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        originalWidth: rect.width
      });
    }
  }

  return (
    <Box position="relative" mb={500} ref={containerRef}>
      {!disableResize && (
        <>
          <WindowEvent event="mousemove" handler={onMouseMove} />
          <WindowEvent event="mouseup" handler={onMouseUp} />
          <WindowEvent event="resize" handler={onResize} />
        </>
      )}

      <StyledContainer
        p="0"
        pr="0"
        flex="1"
        width={position.width ? `${position.width}px` : 'auto'}
      >
        {!disableResize ? (
          <Frame
            width="100%"
            height="200px"
            frameBorder="none"
            initialContent='<!DOCTYPE html><html><head></head><body><div></div><div id="target-portal"></div></body></html>'
          >
            <FrameContextConsumer>
              {frameContext => (
                <ThemeProvider target={frameContext.document.head}>
                  <Box position="relative" p="400" pr="700" overflow="hidden">
                    {children}
                  </Box>
                </ThemeProvider>
              )}
            </FrameContextConsumer>
          </Frame>
        ) : (
          <Box position="relative" p="400" pr="700" overflow="hidden">
            children
          </Box>
        )}

        {!disableResize && (
          <StyledResize
            onMouseDown={onMouseDown}
            padding={100}
            display="flex"
            alignItems="center"
          >
            <StyledDragHandle size={24} />
          </StyledResize>
        )}
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
console.log('test pusdafsh');
export default ResizeContainer;
