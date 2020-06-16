import { tokens } from '@sparkpost/design-tokens';

export default `
  html {
    position: relative;
    box-sizing: border-box;
    font-size: ${tokens.fontSize_root};
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;

    color: ${tokens.color_gray_900};
    font-family: ${tokens.fontFamily_sans};
    font-size: ${tokens.fontSize_300};
    line-height: ${tokens.lineHeight_300};
    font-weight: ${tokens.fontWeight_normal};
  }

  * {
    box-sizing: inherit;
  }

  h1 {
    font-size: ${tokens.fontSize_700};
    line-height: ${tokens.lineHeight_700};
  }

  h2 {
    font-size: ${tokens.fontSize_600};
    line-height: ${tokens.lineHeight_600};
  }

  h3 {
    font-size: ${tokens.fontSize_500};
    line-height: ${tokens.lineHeight_500};
  }

  h4 {
    font-size: ${tokens.fontSize_400};
    line-height: ${tokens.lineHeight_400};
  }

  h5 {
    font-size: ${tokens.fontSize_300};
    line-height: ${tokens.lineHeight_300};
  }

  h6 {
    font-size: ${tokens.fontSize_200};
    line-height: ${tokens.lineHeight_200};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: ${tokens.fontWeight_semibold};
  }

  small {
    font-size: ${tokens.fontSize_200};
    line-height: ${tokens.lineHeight_200};
  }

  p,
  ul,
  ol {
    font-size: ${tokens.fontSize_300};
    line-height: ${tokens.lineHeight_300};
  }

  code,
  pre {
    font-family: ${tokens.fontFamily_monospace};
    font-size: ${tokens.fontSize_100};
    line-height: ${tokens.lineHeight_100};
  }

  ul,
  ol,
  dd,
  figure,
  pre,
  table,
  fieldset,
  hr {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  pre,
  table,
  fieldset {
    margin: 0;
  }

  a,
  a:visited {
    color: ${tokens.color_blue_700};
    text-decoration: underline;

    &:hover,
    &:active,
    &:focus {
      color: ${tokens.color_blue_800}
      cursor: pointer;
    }
  }

  ul,
  ol {
    padding-left: ${tokens.spacing_500};
  }

  hr {
    margin: ${tokens.spacing_500} 0;
    background: ${tokens.color_gray_400};
    border: none;
    height: 1px;
  }

  ::selection {
    color: ${tokens.color_gray_1000};
    background: ${tokens.color_blue_300};
    text-shadow: none;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }
`;
