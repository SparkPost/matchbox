import { tokens } from '@sparkpost/design-tokens';

export const truncate = props => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
};

export const lookslike = props => {
  let styles;

  switch (props.lookslike) {
    case 'h1':
      styles = `
        font-size: ${tokens.fontSize_700};
        line-height: ${tokens.lineHeight_700};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'h2':
      styles = `
        font-size: ${tokens.fontSize_600};
        line-height: ${tokens.lineHeight_600};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'h3':
      styles = `
        font-size: ${tokens.fontSize_500};
        line-height: ${tokens.lineHeight_500};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'h4':
      styles = `
        font-size: ${tokens.fontSize_400};
        line-height: ${tokens.lineHeight_400};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'h5':
      styles = `
        font-size: ${tokens.fontSize_300};
        line-height: ${tokens.lineHeight_300};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'h6':
      styles = `
        font-size: ${tokens.fontSize_200};
        line-height: ${tokens.lineHeight_200};
        font-weight: ${tokens.fontWeight_semibold};
      `;
      break;
    case 'p':
      styles = `
        font-size: ${tokens.fontSize_300};
        line-height: ${tokens.lineHeight_300};
        font-weight: ${tokens.fontWeight_normal};
      `;
      break;
    default:
      break;
  }

  return styles;
};
