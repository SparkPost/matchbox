import { tokens } from '@sparkpost/design-tokens';

export const emptyState = `
  position: relative;
  height: 100vh;
  padding: 33vh ${tokens.spacing_400};
`;

export const title = `
  font-family: ${tokens.fontFamily_sans};
  font-size: ${tokens.fontSize_700};
  line-height: ${tokens.lineHeight_700};
  margin-bottom: ${tokens.spacing_400};
  width: auto;

  @media screen and (min-width: ${tokens.mediaQuery_sm}) {
    width: 45%;
  }
`;

export const content = `
  width: auto;

  @media screen and (min-width: ${tokens.mediaQuery_sm}) {
    width: 45%;
  }

  p {
    font-size: ${tokens.fontSize_300};
    color: ${tokens.color_gray_900};
    margin-bottom: ${tokens.spacing_400};
  }
`;

export const actions = `
  width: auto;

  @media screen and (min-width: ${tokens.mediaQuery_sm}) {
    width: 45%;
  }

  & > * {
    margin-right: ${tokens.spacing_400};
  }
`;

export const image = `
  display: none;
  position: absolute;
  top: 45%;
  left: 45%;
  width: 50%;
  max-width: 600px;
  height: auto;

  transform: translate(0, -50%);

  & > svg {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: ${tokens.mediaQuery_sm}) {
    display: block;
  }
`;

export const secondaryAction = `
  display: inline-block;
  padding-top: ${tokens.spacing_400};
  white-space: nowrap;
`;
