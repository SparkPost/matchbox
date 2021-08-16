import React from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, typography, TypographyProps, compose } from 'styled-system';
import type * as Polymorphic from '../../helpers/types';
import { truncate, lookslike } from './styles';
import PropTypes from 'prop-types';

const system = compose(color, space, typography);

interface BaseProps {
  'data-id'?: string;
  children: React.ReactNode;
  looksLike?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

type PolymorphicText = Polymorphic.ForwardRefComponent<'p', BaseProps &
  ColorProps &
  SpaceProps &
  TypographyProps>;

const StyledText = styled('p')`
  ${system}
  ${truncate}
  ${lookslike}
`;

const Text = React.forwardRef(function Text(props, ref) {
  const { as, looksLike, children, ...rest } = props;

  return (
    <StyledText as={as} lookslike={looksLike} ref={ref} {...rest}>
      {children}
    </StyledText>
  );
}) as PolymorphicText;

Text.propTypes = {
  as: PropTypes.elementType,
  'data-id': PropTypes.string,
  children: PropTypes.node.isRequired,
  looksLike: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
};

Text.defaultProps = {
  as: 'p',
};

Text.displayName = 'Text';
export default Text;
