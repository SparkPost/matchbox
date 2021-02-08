import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, useResizeObserver } from '@sparkpost/matchbox';

describe('useResizeOberver', () => {
  add('example usage', () => {
    const [ref, { contentRect }] = useResizeObserver();
    return (
      <Box
        p="400"
        bg="blue.200"
        color="blue.800"
        style={{ resize: 'both', overflow: 'auto' }}
        ref={ref}
      >
        <div>Resize me </div>
        <div>x: {contentRect.x} </div>
        <div>y: {contentRect.y} </div>
        <div>width: {contentRect.width} </div>
        <div>height: {contentRect.height} </div>
        <div>top: {contentRect.top} </div>
        <div>right: {contentRect.right} </div>
        <div>bottom: {contentRect.bottom} </div>
        <div>left: {contentRect.left} </div>
      </Box>
    );
  });
});
