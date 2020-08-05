import React from 'react';
import PropTypes from 'prop-types';
import { margin } from 'styled-system';
import styled from 'styled-components';
import { pick } from '../../helpers/systemProps';

const StyledIcon = styled.svg`
  ${margin}
`;

const Icon = React.forwardRef(function Icon(props, ref) {
  const { as, size, width, height, label, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);
  return (
    <StyledIcon
      as={as}
      size={size}
      width={width}
      height={height}
      label={label}
      ref={ref}
      mt="-2px"
      {...systemProps}
    />
  );
});

Icon.displayName = 'Button.Icon';
Icon.propTypes = {
  as: PropTypes.elementType,
  // These should be the same props as IconBase
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
};

export default Icon;
