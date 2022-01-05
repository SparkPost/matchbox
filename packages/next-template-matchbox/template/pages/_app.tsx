import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@sparkpost/matchbox';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
