import React from 'react';

const StoryContainer = ({ bg, children }) => (
  <div style={{ padding: '12px', minHeight: '100vh', background: bg || '#f2f2f5' }}>{children}</div>
);

export default StoryContainer;
