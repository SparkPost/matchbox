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
 * This is an experimental prop
 * Calibre naturally has more spacing above than below, cropping is not perfect.
 */
export const crop = (props) => {
  const capHeight = 0.69; // Cap height optimized for Calibre
  const baseline = 2; // Calculated height will always be divisible by this baseline

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

  const desiredHeight = capHeight * Number(fontSize);
  const spaceToRemove = (Number(lineHeight) - desiredHeight);
  const spaceRoundedToBaseline = spaceToRemove - (spaceToRemove % baseline);

  return `
    transform: translateY(${spaceRoundedToBaseline / 2}px);

    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-top: -${spaceRoundedToBaseline}px;
    }
  `;
};
