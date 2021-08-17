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

const StyledSpinner = styled(Box)`
  ${system}
  ${dimensions}
`;

const StyledSVG = styled('svg')`
  ${circleOuter}
  ${dimensions}
`;

const StyledCircle = styled('circle')`
  ${circle}
`;

type BaseProps = {
  color?: 'gray' | 'orange' | 'blue' | 'white';
  label: string;
  rotationOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
};

type SpinnerProps = BaseProps & MarginProps & PositionProps & WidthProps & HeightProps;

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(props, ref) {
  const { size, color, label, rotationOnly, ...rest } = props;
  const systemProps = pick(rest, system.propNames);
  return (
    <StyledSpinner {...systemProps} ref={ref} data-id="loading-spinner">
      <StyledSVG
        size={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="25 25 50 50"
        rotationOnly={rotationOnly}
      >
        <StyledCircle
          size={size}
          color={color}
          cx="50"
          cy="50"
          r="20"
          vectorEffect="non-scaling-stroke"
          rotationOnly={rotationOnly}
        />
      </StyledSVG>
      <ScreenReaderOnly>{label}</ScreenReaderOnly>
    </StyledSpinner>
  );
});

Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  size: 'medium',
};

export default Spinner;
