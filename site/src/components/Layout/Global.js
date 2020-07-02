import { tokens } from '@sparkpost/design-tokens';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .site-wrapper {
    opacity: 1 !important;
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
