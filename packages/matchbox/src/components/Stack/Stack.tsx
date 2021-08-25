import React from 'react';
import { system } from 'styled-system';
import { Box } from '../Box';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import { AlignX } from '../../helpers/types';
import { SpaceKeys } from '../ThemeProvider/theme';

type AlignmentAndGutterProps = {
  $gutter?: ResponsiveValue<SpaceKeys | string>;
  $alignment?: ResponsiveValue<AlignX>;
};

const StyledBox = styled(Box)<AlignmentAndGutterProps>`
  display: flex;
  flex-direction: column;
  ${() =>
    system({
      $gutter: {
        property: 'paddingBottom',
        scale: 'space',
      },
    })}
  ${() =>
    system({
      $alignment: {
        property: 'alignItems',
        defaultScale: {
          center: 'center',
          left: 'flex-start',
          right: 'flex-end',
        },
      },
    })}
`;

type StackProps = {
  children?: React.ReactNode;
  /**
   * Positions children horizontally.
   * Styled-system responsive arrays work here.
   */
  align?: ResponsiveValue<AlignX>;
  /**
   * Sets the gutter space between children.
   * Styled-system responsive arrays work here.
   */
  space?: ResponsiveValue<SpaceKeys | string>;
  'data-id'?: string;
};

function Stack(props: StackProps): JSX.Element {
  const { children, align, space = '500' } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <div data-id={props['data-id']}>
      {items.map((child, i) => (
        <StyledBox key={i} $alignment={align} $gutter={i < items.length - 1 ? space : null}>
          {child}
        </StyledBox>
      ))}
    </div>
  );
}

Stack.displayName = 'Stack';
export default Stack;
