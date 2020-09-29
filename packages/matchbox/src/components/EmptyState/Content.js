import React from 'react';
import PropTypes from 'prop-types';
import { StyledContent } from './styles';

function Content(props) {
  const { children } = props;

  return <StyledContent>{children}</StyledContent>;
}

Content.displayName = 'EmptyState.Content';

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
