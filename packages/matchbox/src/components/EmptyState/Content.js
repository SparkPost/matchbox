import React from 'react';
import PropTypes from 'prop-types';
import { StyledContent } from './styles';

const Content = React.forwardRef(function Content(props, userRef) {
  const { children } = props;

  return <StyledContent ref={userRef}>{children}</StyledContent>;
});

Content.displayName = 'EmptyState.Content';

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
