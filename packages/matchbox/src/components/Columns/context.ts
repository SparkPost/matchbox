import React from 'react';
import { ResponsiveValue } from 'styled-system';
import { SpaceKeys } from '../ThemeProvider/theme';

type ContextProps = {
  collapsed?: boolean;
  space?: ResponsiveValue<SpaceKeys | string>;
};

export const ColumnsContext = React.createContext<ContextProps>({});
