import React from 'react';
import styled from 'styled-components';
import { padding, PaddingProps } from 'styled-system';
import Panel from './Panel';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';
import { pick } from '../../helpers/props';
import { PanelPaddingContext, PanelAppearanceContext } from './context';

const StyledSection = styled(Box)`
  &:last-child {
    border-bottom: none;
  }
`;

type SectionProps = Pick<
  React.ComponentProps<typeof Panel>,
  'appearance' | 'className' | 'children'
> &
  PaddingProps;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(function Section(props, userRef) {
  const { children, className, appearance, ...rest } = props;
  const actions = getChild('Panel.Action', children);
  const content = excludeChild(['Panel.Action'], children);
  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = appearance || React.useContext(PanelAppearanceContext);
  const systemProps = pick(rest, padding.propNames);

  // Checks if 'padding', and overwrite 'p' instead of using the 'padding' key
  const paddingProps = React.useMemo(() => {
    if (Object.keys(systemProps).includes('padding')) {
      const { padding, ...rest } = systemProps;
      return { ...paddingContext, p: padding, ...rest };
    }
    return { ...paddingContext, ...systemProps };
  }, [paddingContext, systemProps]);

  return (
    <StyledSection
      borderBottom="300"
      className={className}
      ref={userRef}
      tabIndex={-1}
      {...paddingProps}
      bg={appearanceContext === 'inverted' ? 'gray.900' : ''}
      color={appearanceContext === 'inverted' ? 'white' : ''}
    >
      <Columns collapseBelow="xs" space="300" alignY="top" align="right">
        <Column>{content}</Column>
        {actions && actions.length ? (
          <Column width="content">
            <Button.Group>{actions}</Button.Group>
          </Column>
        ) : null}
      </Columns>
    </StyledSection>
  );
}) as React.ForwardRefExoticComponent<SectionProps>;

Section.displayName = 'Panel.Section';

export default Section;
