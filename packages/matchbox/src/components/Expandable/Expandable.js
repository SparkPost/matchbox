import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { KeyboardArrowLeft } from '@sparkpost/matchbox-icons';
import { onKeys } from '../../helpers/keyEvents';
import { StyledHeader, StyledContentWrapper, expandable, title, subtitle, arrow } from './styles';

import Accent from './Accent';
import { Box } from '../Box';

const StyledExpandable = styled('div')`
  ${expandable}
  ${margin}
`;

const StyledArrow = styled('div')`
  ${arrow}
`;

const StyledTitle = styled('h3')`
  ${title}
`;

const StyledSubtitle = styled(Box)`
  ${subtitle}
`;

const StyledIcon = styled(Box)``;

function Expandable(props) {
  const {
    children,
    defaultOpen,
    icon,
    id,
    open,
    onToggle,
    subtitle,
    title,
    accent,
    variant,
    ...rest
  } = props;

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
    header.current.blur();
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
    <StyledIcon flex="0" minWidth="40px" maxWidth="40px" mr="500">
      {icon}
    </StyledIcon>
  ) : null;

  const subtitleMarkup = subtitle ? (
    <StyledSubtitle as="h6" mb="100">
      {subtitle}
    </StyledSubtitle>
  ) : null;

  const contentSpacer = icon ? <Box flex="0" minWidth="40px" maxWidth="40px" mr="500" /> : null;

  return (
    <Box {...rest}>
      {accentMarkup}
      <StyledExpandable accent={accent} variant={variant}>
        <StyledHeader
          aria-controls={id}
          aria-expanded={isOpen}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          ref={header}
          data-id="expandable-toggle"
          type="button"
          variant={variant}
        >
          {iconMarkup}
          <Box display="inline-block" flex="1">
            <StyledTitle variant={variant}>{title}</StyledTitle>
            {subtitleMarkup}
          </Box>
          <Box display="inline-block" flex="0">
            <StyledArrow isOpen={isOpen}>
              <KeyboardArrowLeft size={26} />
            </StyledArrow>
          </Box>
        </StyledHeader>
        <StyledContentWrapper
          aria-hidden={!isOpen}
          isOpen={isOpen}
          id={id}
          data-id="expandable-content"
          variant={variant}
        >
          {contentSpacer}
          <Box flex="1">{children}</Box>
        </StyledContentWrapper>
      </StyledExpandable>
    </Box>
  );
}

Expandable.Accent = Accent;
Expandable.Icon = StyledIcon;
Expandable.Title = StyledTitle;
Expandable.Subtitle = StyledSubtitle;
Expandable.ContentWrapper = StyledContentWrapper;
Expandable.Arrow = StyledArrow;
Expandable.Header = StyledHeader;

Expandable.defaultProps = {
  defaultOpen: false,
  variant: 'bordered',
};

Expandable.propTypes = {
  /**
   * Default open state when not controlled
   */
  defaultOpen: Proptypes.bool,
  /**
   * Optional React node for an image or icon. Works best with an SVG optimized for 40x40.
   */
  icon: Proptypes.node,
  /**
   * Required for accessilibty between header and content
   */
  id: Proptypes.string.isRequired,
  /**
   * Pass a boolean to control open state
   */
  open: Proptypes.bool,
  /**
   * Optional, but required when controlling open state
   */
  onToggle: Proptypes.func,
  /**
   * Optional content area beneath header title
   */
  subtitle: Proptypes.node,
  /**
   * Main header title content
   */
  title: Proptypes.node.isRequired,
  /**
   * Optional accent color or boolean to default to blue
   */
  accent: Proptypes.oneOfType([
    Proptypes.bool,
    Proptypes.oneOf(['orange', 'blue', 'red', 'yellow', 'green', 'purple', 'navy', 'gray']),
  ]),

  variant: Proptypes.oneOf(['bordered', 'borderless']),
  /**
   * Margin props
   */
  ...createPropTypes(margin.propNames),
};

export default Expandable;
