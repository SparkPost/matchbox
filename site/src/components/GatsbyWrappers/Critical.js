import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-Light.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-LightItalic.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre.woff2') format('woff2'),
      url('/fonts/calibre/Calibre.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-Italic.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-Italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-Medium.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-MediumItalic.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-SemiBold.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/calibre/Calibre-SemiBoldItalic.woff2') format('woff2'),
      url('/fonts/calibre/Calibre-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
`;
