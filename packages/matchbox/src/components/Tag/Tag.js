import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Close } from '@sparkpost/matchbox-icons';
import { createPropTypes } from '@styled-system/prop-types';
import { margin } from 'styled-system';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { pick } from '../../helpers/props';
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
  const systemProps = pick(rest, margin.propNames);

  const closeMarkup = onRemove ? (
    <StyledClose onClick={onRemove} tagColor={color} type="button">
      <Close size={16} />
      <ScreenReaderOnly>Remove</ScreenReaderOnly>
    </StyledClose>
  ) : null;

  return (
    <StyledTag
      as="span"
      className={className}
      data-id={rest['data-id']}
      tagColor={color}
      hasRemove={!!onRemove}
      {...systemProps}
    >
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
  'data-id': PropTypes.string,
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
