import React from 'react';
import { ThemeProvider } from '../packages/matchbox/src/components';

export default ({ theme, children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
