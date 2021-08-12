import React from 'react';
import PropTypes from 'prop-types';
import { margin, MarginProps } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';
import { pick } from '../../helpers/props';

interface IconBaseProps extends React.ComponentPropsWithoutRef<'svg'> {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  label?: string;
}

interface ButtonIconProps extends IconBaseProps, MarginProps {
  as?: React.ElementType;
}

const StyledIcon = styled.svg`
  ${margin}
`;

const Icon = React.forwardRef<SVGSVGElement, ButtonIconProps>(function Icon(props, userRef) {
  const { as, size, width, height, label, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);
  return (
    <StyledIcon
      as={as}
      size={size}
      width={width}
      height={height}
      label={label}
      ref={userRef}
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
  ...createPropTypes(margin.propNames),
};

export default Icon;
