const MAP = 'matchbox-tokens';

/**
 * Generates SCSS map functions for all tokens aside from color
 */
const mapGet = (key) => `
  @function ${key}($variant) {
    $parent-map: map-get($${MAP}, '${key}');
      
    @if map-has-key($parent-map, '#{$variant}') {
      @return map-get($parent-map, '#{$variant}');
    }
    
    @error '${key} '#{$variant}' not found.';
  }
`;

const utils = (rootFontSize) => {
  const root = '$font-size-root';
  const unitless = rootFontSize.value.replace('px', '');

  return `
    @import './maps';

    $DEFAULT_FONT_SIZE: ${root};
    $DEFAULT_FONT_SIZE_UNITLESS: ${unitless};

    @function rem($n) {
      $result: 0rem + $n / $DEFAULT_FONT_SIZE_UNITLESS;
      @return $result;
    }

    @function em($n) {
      $result: 0em + $n / $DEFAULT_FONT_SIZE_UNITLESS;
      @return $result;
    }
  `;
};

const colorMapGet = () => `
  @function color($palette, $variant: base) {
    $color-map: map-get($${MAP}, 'color');

    @if map-has-key($color-map, '#{$palette}') {
      $palette-map: map-get($color-map, '#{$palette}');
      @return map-get($palette-map, '#{$variant}');
    }
    
    @error 'color' #{$palette} - #{$variant}' not found.';
  }
`;

module.exports = {
  mapGet,
  utils,
  colorMapGet,
};
