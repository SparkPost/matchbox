import React from 'react';

export const StoryContainer = ({ bg, children }) => (
  <div style={{ padding: '60px 30px', background: bg ||'#f2f2f5' }}>
    {children}
  </div>
);
