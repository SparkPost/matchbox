import React from 'react';

/**
 * Context is created here to pass system prop padding
 * to Panel.Header and Panel.Section
 */
export const PanelPaddingContext = React.createContext({});

/**
 * Context is created here to pass appearance prop
 * to Panel.Header, Panel.SubHeader, and Panel.Section
 */
export const PanelAppearanceContext = React.createContext({});
