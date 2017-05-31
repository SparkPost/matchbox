import React from 'react';

export const StoryContainer = ({children}) => <div style={{ padding: '60px 30px' }}>{children}</div>;

export const bgColors = [
  { name: "light", value: "#f2f2f5", default: true },
  { name: "white", value: "#ffffff" },
  { name: "dark", value: "#414146" },
];
