import React from 'react';
import PropTypes from 'prop-types';
import { buttonFrom } from '../Button';
import { linkFrom } from '../UnstyledLink';
import styled from 'styled-components';
import { emptyState, title, content, actions, image, secondaryAction } from './styles.js';

const StyledEmptyState = styled('div')`
  ${emptyState}
`;

const StyledTitle = styled('h1')`
  ${title}
`;

const StyledContent = styled('div')`
  ${content}
`;

const StyledActions = styled('div')`
  ${actions}
`;

const StyledImage = styled('div')`
  ${image}
`;

const StyledSecondaryAction = styled('span')`
  ${secondaryAction}
`;

function EmptyState(props) {
  const { title, primaryAction, secondaryAction, image: Image, children } = props;

  const primaryActionMarkup = primaryAction
    ? buttonFrom(primaryAction, {
        size: 'large',
        ...(!primaryAction.color ? { color: 'blue' } : {}),
      })
    : null;

  return (
    <StyledEmptyState>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{children}</StyledContent>
      <StyledActions>
        {primaryActionMarkup}{' '}
        {secondaryAction && (
          <StyledSecondaryAction>{linkFrom(secondaryAction)}</StyledSecondaryAction>
        )}
      </StyledActions>
      {Image && (
        <StyledImage>
          <Image />
        </StyledImage>
      )}
    </StyledEmptyState>
  );
}

EmptyState.displayName = 'EmptyState';
EmptyState.propTypes = {
  /**
   * The display title
   */
  title: PropTypes.string,
  /**
   * Main cta. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  primaryAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),
  /**
   * Secondary Action - appear as a link next to the primary action
   */
  secondaryAction: PropTypes.shape({
    content: PropTypes.node.isRequired,
  }),
  /**
   * Image to display
   */
  image: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  /**
   * Content below the CTA
   */
  children: PropTypes.node,
};

export default EmptyState;
