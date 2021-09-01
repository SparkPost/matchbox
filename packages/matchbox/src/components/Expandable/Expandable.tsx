import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { KeyboardArrowLeft } from '@sparkpost/matchbox-icons';
import { onKeys } from '../../helpers/keyEvents';
import { pick } from '../../helpers/props';
import { StyledHeader, StyledContentWrapper, expandable, title, subtitle, arrow } from './styles';

import Accent from './Accent';
import { Box, BoxProps } from '../Box';

type TransientProps = {
  $accent?: React.ComponentProps<typeof Accent>['accentColor'];
  $variant?: string;
  $isOpen?: boolean;
};

const StyledExpandable = styled('div')<TransientProps>`
  ${expandable}
  ${margin}
`;

const StyledArrow = styled.div<TransientProps>`
  ${arrow}
`;

const StyledTitle = styled('h3')<TransientProps>`
  ${title}
`;

const StyledSubtitle = styled(Box)<BoxProps & TransientProps>`
  ${subtitle}
`;

export type ExpandableProps = MarginProps & {
  /**
   * Optional accent color or boolean to default to blue
   */
  accent?: React.ComponentProps<typeof Accent>['accentColor'];
  /**
   * Default open state when not controlled
   */
  defaultOpen?: boolean;
  /**
   * Optional React node for an image or icon. Works best with an SVG optimized for 40x40.
   */
  icon?: React.ReactNode;
  /**
   * Required for accessilibty between header and content
   */
  id: string;
  /**
   * Pass a boolean to control open state
   */
  open?: boolean;
  /**
   * Optional, but required when controlling open state
   */
  onToggle?: () => void;
  /**
   * Optional content area beneath header title
   */
  subtitle?: React.ReactNode;
  /**
   * Main header title content
   */
  title: React.ReactNode;
  /**
   * Contents of the expandable
   */
  children?: React.ReactNode;
  'data-id'?: string;
  variant?: 'bordered' | 'borderless';
};

function Expandable(props: ExpandableProps): JSX.Element {
  const {
    children,
    defaultOpen = false,
    'data-id': dataId,
    icon,
    id,
    open,
    onToggle,
    subtitle,
    title,
    accent,
    variant = 'bordered',
    ...rest
  } = props;

  const systemProps = pick(rest, margin.propNames);
  const header = React.useRef();
  const [isOpen, setIsOpen] = React.useState(open || defaultOpen);
  const controlled = typeof open === 'boolean';

  // Sets internal open state when controlled externally
  React.useEffect(() => {
    if (controlled) {
      setIsOpen(open);
    }
  }, [open]);

  function handleToggle() {
    if (controlled) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  }

  function handleClick() {
    (header as React.MutableRefObject<HTMLButtonElement>).current.blur();
    handleToggle();
  }

  function handleKeyDown(e) {
    onKeys(['space', 'enter'], () => {
      e.preventDefault();
      handleToggle();
    })(e);
  }

  const accentColor = accent === true ? 'blue' : accent;

  const accentMarkup = accentColor ? <Accent accentColor={accentColor} /> : null;

  const iconMarkup = icon ? (
    <Box flex="0" minWidth="40px" maxWidth="40px" mr="500">
      {icon}
    </Box>
  ) : null;

  const subtitleMarkup = subtitle ? (
    <StyledSubtitle as="h6" mb="100">
      {subtitle}
    </StyledSubtitle>
  ) : null;

  const contentSpacer = icon ? <Box flex="0" minWidth="40px" maxWidth="40px" mr="500" /> : null;

  return (
    <Box data-id={dataId} {...systemProps}>
      {accentMarkup}
      <StyledExpandable $accent={accent} $variant={variant}>
        <StyledHeader
          aria-controls={id}
          aria-expanded={isOpen}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          ref={header}
          data-id="expandable-toggle"
          type="button"
          $variant={variant}
        >
          {iconMarkup}
          <Box display="inline-block" flex="1">
            <StyledTitle $variant={variant}>{title}</StyledTitle>
            {subtitleMarkup}
          </Box>
          <Box display="inline-block" flex="0">
            <StyledArrow $isOpen={isOpen}>
              <KeyboardArrowLeft size={26} />
            </StyledArrow>
          </Box>
        </StyledHeader>
        <StyledContentWrapper
          aria-hidden={!isOpen}
          $isOpen={isOpen}
          id={id}
          data-id="expandable-content"
          $variant={variant}
        >
          {contentSpacer}
          <Box flex="1">{children}</Box>
        </StyledContentWrapper>
      </StyledExpandable>
    </Box>
  );
}

Expandable.Accent = Accent;
Expandable.Title = StyledTitle;
Expandable.Subtitle = StyledSubtitle;
Expandable.ContentWrapper = StyledContentWrapper;
Expandable.Arrow = StyledArrow;
Expandable.Header = StyledHeader;
export default Expandable;
