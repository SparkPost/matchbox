import React from 'react';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { margin, MarginProps } from 'styled-system';
import { pick } from '../../helpers/props';
import { getChild } from '../../helpers/children';
import { Box } from '../Box';

const StyledWrapper = styled.div`
  ${margin}
`;

type LabelValueProps = MarginProps & {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  appearance?: 'inverted' | 'default';
};

type LabelProps = Pick<LabelValueProps, 'children' | 'orientation' | 'appearance'>;

const Label = ({ children, orientation, appearance }: LabelProps): JSX.Element => (
  <Box
    fontSize="200"
    fontWeight="semibold"
    mb={orientation === 'vertical' ? '100' : ''}
    color={appearance == 'inverted' ? 'gray.500' : ''}
  >
    {children}
  </Box>
);

Label.displayName = 'LabelValue.Label';

type ValueProps = Pick<LabelValueProps, 'children' | 'appearance'>;

const Value = ({ children, appearance }: ValueProps): JSX.Element => (
  <Box color={appearance == 'inverted' ? 'white' : ''}>{children}</Box>
);

Value.displayName = 'LabelValue.Value';

const LabelValue = React.forwardRef<HTMLDivElement, LabelValueProps>(function LabelValue(
  props,
  userRef,
) {
  const {
    label,
    children,
    className,
    orientation = 'vertical',
    appearance = 'default',
    ...rest
  } = props;

  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledWrapper className={className} {...systemProps} ref={userRef} tabIndex={-1}>
      <Box
        display={orientation === 'horizontal' ? 'grid' : 'block'}
        gridGap={orientation === 'horizontal' ? '300' : ''}
        gridTemplateColumns={orientation === 'horizontal' ? `${tokens.spacing_900} 1fr` : ''}
      >
        {getChild('LabelValue.Label', children, { orientation, appearance })}
        {getChild('LabelValue.Value', children, { appearance })}
      </Box>
    </StyledWrapper>
  );
}) as React.ForwardRefExoticComponent<LabelValueProps> & {
  Label: typeof Label;
  Value: typeof Value;
};

LabelValue.displayName = 'LabelValue';

LabelValue.Label = Label;
LabelValue.Value = Value;

export default LabelValue;
