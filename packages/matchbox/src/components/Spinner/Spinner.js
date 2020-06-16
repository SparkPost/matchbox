import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, position, compose } from 'styled-system';
import { pick } from '@styled-system/props';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { circleOuter, circle, dimensions } from './styles';

const system = compose(margin, position);

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

const Spinner = React.forwardRef(function Spinner(props, ref) {
  const { size, color, label, rotationOnly } = props;
  const systemProps = pick(props);
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

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['gray', 'orange', 'blue', 'white']),
  label: PropTypes.string.isRequired,
  rotationOnly: PropTypes.bool,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(position.propNames),
};

Spinner.defaultProps = {
  size: 'medium',
};

export default Spinner;
