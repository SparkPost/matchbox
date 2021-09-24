import React from 'react';
import styled from 'styled-components';
import {
  margin,
  MarginProps,
  position,
  PositionProps,
  width,
  WidthProps,
  height,
  HeightProps,
  compose,
} from 'styled-system';
import { pick } from '../../helpers/props';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { circleOuter, circle, dimensions } from './styles';

const system = compose(margin, position, width, height);

type SVGSizeProp = {
  $size?: 'small' | 'large' | 'medium';
};

type SVGRotationOnlyProp = {
  $rotationOnly?: boolean;
};

const StyledSpinner = styled(Box)<SVGSizeProp>`
  ${system}
  ${dimensions}
`;

const StyledSVG = styled.svg<SVGSizeProp & SVGRotationOnlyProp>`
  ${circleOuter}
  ${dimensions}
`;

const StyledCircle = styled.circle<SVGSizeProp & SVGRotationOnlyProp>`
  ${circle}
`;

export type SpinnerProps = {
  color?: 'gray' | 'orange' | 'blue' | 'white';
  label: string;
  rotationOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
} & MarginProps &
  PositionProps &
  WidthProps &
  HeightProps;

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(props, ref) {
  const { size = 'medium', color, label, rotationOnly, ...rest } = props;
  const systemProps = pick(rest, system.propNames);
  return (
    <StyledSpinner $size={size} {...systemProps} ref={ref} data-id="loading-spinner">
      <StyledSVG
        $size={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="25 25 50 50"
        $rotationOnly={rotationOnly}
      >
        <StyledCircle
          $size={size}
          color={color}
          cx="50"
          cy="50"
          r="20"
          vectorEffect="non-scaling-stroke"
          $rotationOnly={rotationOnly}
        />
      </StyledSVG>
      <ScreenReaderOnly>{label}</ScreenReaderOnly>
    </StyledSpinner>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
