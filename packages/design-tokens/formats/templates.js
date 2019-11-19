const mapGet = (basename, aliases) => `
  @function ${basename}($variant) {
    @if map-has-key($${basename}-map, '${basename}-#{$variant}') {
      @return map-get($${basename}-map, '${basename}-#{$variant}');
    }

    @error '${basename} #{$variant} not found.';
  }
`;

const typographyMapGet = (basename, aliases) => `
  $DEFAULT_FONT_SIZE: ${aliases.DEFAULT_BASE.value}px;
  $DEFAULT_FONT_SIZE_UNITLESS: ${aliases.DEFAULT_BASE.value};

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

const deepMapGet = (basename) => `
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
  deepMapGet
};
