const mapGet = basename => `
  @function ${basename}($variant) {
    @if map-has-key($${basename}-map, '${basename}-#{$variant}') {
      @return map-get($${basename}-map, '${basename}-#{$variant}');
    }

    @error '${basename} #{$variant} not found.';
  }
`;

const typographyMapGet = (basename, props) => {
  const size = props.find(({ name }) => name === 'font-size-root').value;
  const unitless = size.replace('px', '');

  return `
    $DEFAULT_FONT_SIZE: ${size};
    $DEFAULT_FONT_SIZE_UNITLESS: ${unitless};

    @function rem($n) {
      $result: 0rem + $n / $DEFAULT_FONT_SIZE_UNITLESS;
      @return $result;
    }

    @function em($n) {
      $result: 0em + $n / $DEFAULT_FONT_SIZE_UNITLESS;
      @return $result;
    }

    @function ${basename}($variant) {
      @if map-has-key($${basename}-map, '${basename}-#{$variant}') {
        $result: map-get($${basename}-map, '${basename}-#{$variant}');
        @return $result;
      }

      @error '${basename} #{$variant} not found.';
    }
  `;
};

const deepMapGet = basename => `
  @function ${basename}($parent, $variant: base) {
    @if map-has-key($${basename}-map, $parent) {
      $parent-map: map-get($${basename}-map, $parent);
      @if map-has-key($parent-map, $variant) {
        @return map-get($parent-map, $variant);
      }
    }
    @error '${basename} '#{$parent} - #{$variant}' not found.';
  }
`;

module.exports = {
  mapGet,
  typographyMapGet,
  deepMapGet,
};
