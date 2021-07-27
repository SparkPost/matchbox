import { tokens } from '@sparkpost/design-tokens';
import {
  ErrorOutline,
  CheckCircleOutline,
  InfoOutline,
  ReportProblemOutlined,
} from '@sparkpost/matchbox-icons';

export function container(props) {
  switch (props.status) {
    case 'success':
      return `
        background: ${tokens.color_green_100};
        border: 1px solid ${tokens.color_green_600};
      `;
    case 'warning':
      return `
        background: ${tokens.color_yellow_100};
        border: 1px solid ${tokens.color_yellow_500};
      `;
    case 'danger':
      return `
        background: ${tokens.color_red_100};
        border: 1px solid ${tokens.color_red_700};
      `;
    case 'muted':
      return `
        background: ${tokens.color_gray_100};
        border: 1px solid ${tokens.color_gray_400};
      `;
    case 'default':
    default:
      return `
        background: ${tokens.color_blue_100};
        border: 1px solid ${tokens.color_blue_600};
      `;
  }
}

// Overwrites unstyled link colors within Banner content to be color-contrast accessible
export function childLinks(props) {
  return `
  p, ul, ol {
    font-size: ${props.theme.fontSizes[200]};
  a, a: visited {
    color: ${tokens.color_blue_800};
      &: hover {
      color: ${tokens.color_blue_900};
    }
  }
}
`;
}

export const statusIcons = {
  success: {
    iconName: CheckCircleOutline,
    iconLabel: 'Success',
    bg: 'green.600',
    fill: 'green.700',
  },
  info: {
    iconName: InfoOutline,
    iconLabel: 'Info',
    bg: 'blue.700',
    fill: 'blue.700',
  },
  warning: {
    iconName: ReportProblemOutlined,
    iconLabel: 'Warning',
    bg: 'yellow.300',
    fill: 'yellow.700',
  },
  danger: {
    iconName: ErrorOutline,
    iconLabel: 'Error',
    bg: 'red.700',
    fill: 'red.700',
  },
};

export function dismissBase() {
  return `
transition: background ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
    &: hover {
  cursor: pointer;
}
`;
}

export function dismissColor(props) {
  switch (props.status) {
    case 'success':
      return `
  &: hover {
  background: ${tokens.color_green_300};
}
`;
    case 'warning':
      return `
  &: hover {
  background: ${tokens.color_yellow_300};
}
`;
    case 'danger':
      return `
  &: hover {
  background: ${tokens.color_red_300};
}
`;
    // Gray banner no longer exists as of 4.0.0
    case 'default':
    default:
      return `
  &: hover {
  background: ${tokens.color_blue_300};
}
`;
  }
}
