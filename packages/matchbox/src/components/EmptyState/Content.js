import React from 'react';
import PropTypes from 'prop-types';
import { StyledContent } from './styles';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/systemProps';

function Content(props) {
  const { children, ...rest } = props;

  const systemProps = pick(rest, padding.propNames);

  return (
    <StyledContent width={['auto', null, '45%']} {...systemProps}>
      {children}
    </StyledContent>
  );
}

Content.displayName = 'EmptyState.Content';

Content.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(padding.propNames),
};

export default Content;
