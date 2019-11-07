import tokens from '@sparkpost/design-tokens/meta';
import _ from 'lodash';

export const truncate = (props) => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  }
};

/**
 * Crops the text elements line height.
 * The element's vertical bounds will begin & end at the rendered font instead of line height.
 * Warning: This is an experimental prop
 */
export const crop = (props) => {
  const capHeight = 0.65; // Cap height optimized for Calibre
  const baseline = 4; // Calculated height will always be divisible by this baseline

  // Requires lineHeight and fontSize to reference a token
  if (
    !props.crop || !props.lineHeight || !props.fontSize ||
    !_.find(tokens, ({ name }) => name === `line-height-${props.lineHeight}`) ||
    !_.find(tokens, ({ name }) => name === `font-size-${props.fontSize}`)
  ) {
    return;
  }

  const lineHeight = _.find(tokens, ({ name }) => name === `line-height-${props.lineHeight}`).pixel_value.replace('px', '');
  const fontSize = _.find(tokens, ({ name }) => name === `font-size-${props.fontSize}`).pixel_value.replace('px', '');

  const topSpace = Number(lineHeight) - capHeight * Number(fontSize);
  const heightCorrection = topSpace - (topSpace % baseline);

  return `
    transform: translate(0, ${heightCorrection / 2}px);

    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-top: -${heightCorrection}px;
    }
  `;
};
