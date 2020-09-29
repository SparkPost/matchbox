import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import Legacy from './Legacy';
import { getChild } from '../../helpers/children';
import { margin } from 'styled-system';
import { pick } from '../../helpers/systemProps';
import { createPropTypes } from '@styled-system/prop-types';

import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Inline } from '../Inline';

const EmptyState = React.forwardRef(function EmptyState(props, userRef) {
  const { children, ...rest } = props;

  const systemProps = pick(rest, margin.propNames);

  return (
    <Columns collapseBelow="sm" space="500" alignY="center" {...systemProps} ref={userRef}>
      <Column width={1 / 2}>
        {getChild('EmptyState.Header', children)}
        {getChild('EmptyState.Content', children)}
        <Box mt={650}>
          <Inline space="500">{getChild('EmptyState.Action', children)}</Inline>
        </Box>
      </Column>
      <Column width={1 / 2}>{getChild('EmptyState.Image', children)}</Column>
    </Columns>
  );
});

EmptyState.displayName = 'EmptyState';

EmptyState.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

EmptyState.Action = Action;
EmptyState.Header = Header;
EmptyState.Content = Content;
EmptyState.Image = Image;
EmptyState.LEGACY = Legacy;

export default EmptyState;
