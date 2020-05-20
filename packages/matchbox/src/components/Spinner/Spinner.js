import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSVG = styled('svg')`
  width: 60px;
  height: 60px;
  fill: none;
`;

const StyledCircle = styled('circle')`
  stroke: orange;
  stroke-width: 4px;
  stroke-linecap: round;

  stroke-dasharray: 150 200;
  stroke-dashoffset: -10;
`;

function Spinner(props) {
  const { size, color, label } = props;
  console.log(size, color, label);
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50">
      <StyledCircle cx="50" cy="50" r="20" vectorEffect="non-scaling-stroke" />
    </StyledSVG>
  );
}

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.oneOf(['gray', 'orange', 'blue']),
  label: PropTypes.string.isRequired,
};

export default Spinner;
