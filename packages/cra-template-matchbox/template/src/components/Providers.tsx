import React from 'react';
import { ThemeProvider } from '@sparkpost/matchbox';

type ProvidersProps = {
  children?: React.ReactNode;
};

function Providers(props: ProvidersProps): JSX.Element {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
