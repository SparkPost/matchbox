import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import styled from 'styled-components';
import { Close } from '@sparkpost/matchbox-icons';
import { createPropTypes } from '@styled-system/prop-types';
import { margin } from 'styled-system';
import { tagBase, tagColor, closeBase, closeColor, content } from './styles';

const StyledTag = styled(Box)`
  ${tagBase}
  ${tagColor}
  ${margin}
`;

const StyledClose = styled('button')`
  ${closeBase}
  ${closeColor}
`;

const StyledContent = styled('span')`
  ${content}
`;

function Tag(props) {
  const { color, children, onRemove, className, ...rest } = props;

  const closeMarkup = onRemove ? (
    <StyledClose onClick={onRemove} tagColor={color} type="button">
      <Close size={16} />
      <ScreenReaderOnly>Close</ScreenReaderOnly>
    </StyledClose>
  ) : null;

  return (
    <StyledTag as="span" className={className} tagColor={color} hasRemove={!!onRemove} {...rest}>
      <StyledContent>{children}</StyledContent>
      {closeMarkup}
    </StyledTag>
  );
}

Tag.displayName = 'Tag';
Tag.propTypes = {
  /**
   * 'orange' | 'blue' | 'yellow' | 'red' | 'navy' | 'purple' | 'green' | 'magenta' | 'teal' | 'lightGray' | 'darkGray'
   */
  color: PropTypes.oneOf([
    'orange',
    'blue',
    'yellow',
    'red',
    'navy',
    'purple',
    'green',
    'magenta',
    'teal',
    'lightGray',
    'darkGray',
  ]),
  /**
   * Close button is hidden unless this is provided
   */
  onRemove: PropTypes.func,
  /**
   * Tag content
   */
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

export default Tag;
