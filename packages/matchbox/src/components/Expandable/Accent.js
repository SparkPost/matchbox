import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { accent } from './styles';

const AccentOuter = styled('div')`
  ${accent}
`;

const Accent = ({ accentColor }) => {
  return <AccentOuter accentColor={accentColor} />;
};

Accent.displayName = 'Expandable.Accent';
Accent.propTypes = {
  accentColor: PropTypes.oneOf([
    'orange',
    'blue',
    'red',
    'yellow',
    'green',
    'purple',
    'navy',
    'gray',
  ]),
};

export default Accent;
