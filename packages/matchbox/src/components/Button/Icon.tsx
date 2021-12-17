import React from 'react';
import { margin, MarginProps } from 'styled-system';
import styled from 'styled-components';
import { pick } from '../../helpers/props';

type IconBaseProps = {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  label?: string;
};

export type ButtonIconProps = IconBaseProps &
  MarginProps & {
    as?: React.ElementType;
  };

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

export default Icon;
