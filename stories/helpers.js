import React from 'react';

export const StoryContainer = ({ bg, children }) => (
  <div style={{ padding: '90px 30px', minHeight: '100vh', background: bg ||'#f2f2f5' }}>
    {children}
  </div>
);
