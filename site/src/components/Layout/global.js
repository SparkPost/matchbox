import { tokens } from '@sparkpost/design-tokens';

export default `
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

  html {
  }

  body {
    color: ${tokens.color_gray_900};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin-top: 0;
    margin-bottom: ${tokens.spacing_400};
    color: ${tokens.color_gray_900};
  }

   h1,
   h2 {
     font-size: ${tokens.fontSize_800};
     line-height: ${tokens.lineHeight_800};
   }

   h3,
   h4 {
     font-size: ${tokens.fontSize_600};
     line-height: ${tokens.lineHeight_600};
   }

   h5 {
     font-size: ${tokens.fontSize_500};
     line-height: ${tokens.lineHeight_500};
   }

   h6 {
     font-size: ${tokens.fontSize_400};
     line-height: ${tokens.lineHeight_400};
   }

   p {
    font-size: ${tokens.fontSize_400};
    line-height: ${tokens.lineHeight_400};
    margin-top: 0;
    margin-bottom: ${tokens.spacing_500};
  }

  ul,
  ol,
  li {
    font-size: ${tokens.fontSize_400};
    line-height: ${tokens.lineHeight_400};
  }

  ul,
  ol {
    margin-bottom: ${tokens.spacing_500};
  }

  li {
    margin-bottom: ${tokens.spacing_100};
  }

  hr {
     border: none;
     height: 2px;
     background: ${tokens.color_gray_200};
     margin: ${tokens.spacing_700} 0;
   }

   b,
   strong {
     font-weight: 600;
   }

   a,
   a:visited {
     color: ${tokens.color_gray_900};
     &:hover {
       color: ${tokens.color_gray_900};
     }
   }

  main {
    a,
    a:visited {
      color: ${tokens.color_blue_700};
      font-weight: 400;
      text-decoration: underline;

      &:hover {
        color: ${tokens.color_blue_700};
        text-decoration: underline;
      }
    }

    p {
      font-size: ${tokens.fontSize_400};
      line-height: ${tokens.lineHeight_400};
    }

     code {
       font-size: ${tokens.fontSize_100};
     }

     small {
       font-size: ${tokens.fontSize_300};
       line-height: ${tokens.lineHeigh_300};
       color: ${tokens.color_gray_700};
     }
    
     pre {
      margin-bottom: ${tokens.spacing_400};
    }
  }

`;
