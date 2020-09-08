import React from 'react';
import { layout, margin, compose } from 'styled-system';
import styled from 'styled-components';
import { createPropTypes } from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { pick } from '../../helpers/systemProps';
import { Box } from '../Box';

const system = compose(layout, margin);

const StyledImage = styled.img`
  ${system};
  ${({ seeThrough }) => (seeThrough ? 'mix-blend-mode: multiply;' : '')}
`;

const Picture = React.forwardRef(function Picture(props, userRef) {
  const {
    alt = '', // All images require an alt, even if its an empty string
    children,
    className,
    seeThrough,
    src,
    role,
    ...rest
  } = props;

  const altText = role === 'presentation' ? '' : alt;
  const systemProps = pick(rest, system.propNames);

  if (!alt && role !== 'presentation') {
    console.warn(
      'Matchbox Picture: Please supply a valid image for `alt` if the image has meaningful content. Otherwise, please set `role` to "presentation"',
    );
  }

  return (
    <Box as="figure" m="0" role={role} ref={userRef}>
      <picture>
        {children}
        <StyledImage
          alt={altText}
          className={className}
          seeThrough={seeThrough}
          src={src}
          width="100%"
          {...systemProps}
        />
      </picture>
    </Box>
  );
});

Picture.displayName = 'Picture';
Picture.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node, // For passing in child `<source />` elements - may have additional uses in the future, so not restricting that now
  role: PropTypes.string,
  seeThrough: PropTypes.bool,
  src: PropTypes.string.isRequired,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(layout.propNames),
};

export default Picture;
