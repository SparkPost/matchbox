import React from 'react';
import styled from 'styled-components';
import { accent } from './styles';

const AccentOuter = styled('div')`
  ${accent}
`;

type ExpandableAccentProps = {
  accentColor?:
    | boolean
    | 'orange'
    | 'blue'
    | 'red'
    | 'yellow'
    | 'green'
    | 'purple'
    | 'navy'
    | 'gray';
};

const Accent = ({ accentColor }: ExpandableAccentProps): JSX.Element => {
  return <AccentOuter accentColor={accentColor} />;
};

Accent.displayName = 'Expandable.Accent';
export default Accent;
