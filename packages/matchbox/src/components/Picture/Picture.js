import React from 'react';
import { layout, margin, compose } from 'styled-system';
import styled from 'styled-components';
import { createPropTypes } from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { pick } from '../../helpers/systemProps';
import { Box } from '../Box';

const system = compose(layout, margin);
const StyledFigure = styled.figure`
  ${system};
  ${({ seeThrough }) => (seeThrough ? 'mix-blend-mode: multiply;' : '')}
`;

// Picture Component
const Picture = React.forwardRef(function Picture(props, userRef) {
  const { children, seeThrough, role, ...rest } = props;
  const systemProps = pick(rest, system.propNames);
  return (
    <StyledFigure
      as="figure"
      m="0"
      role={role}
      ref={userRef}
      seeThrough={seeThrough}
      {...systemProps}
    >
      <picture>{children}</picture>
    </StyledFigure>
  );
});

Picture.displayName = 'Picture';
Picture.propTypes = {
  children: PropTypes.node, // For passing in child `<source />` elements - may have additional uses in the future, so not restricting that now
  role: PropTypes.string,
  seeThrough: PropTypes.bool,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(layout.propNames),
};

// Picture.Image Component
const Image = React.forwardRef(function Image(props, userRef) {
  const { alt, className, src } = props;
  return <Box as="img" alt={alt} className={className} src={src} ref={userRef} width="100%" />;
});

Image.displayName = 'Picture.Image';

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  alt: '',
};

Picture.Image = Image;
export default Picture;
