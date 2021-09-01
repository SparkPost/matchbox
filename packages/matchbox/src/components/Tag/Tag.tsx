import React from 'react';
import styled from 'styled-components';
import { Close } from '@sparkpost/matchbox-icons';
import { margin, MarginProps } from 'styled-system';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { pick } from '../../helpers/props';
import { tagBase, tagColor, closeBase, closeColor, content } from './styles';

type TagColorProp = {
  $tagColor?:
    | 'orange'
    | 'blue'
    | 'yellow'
    | 'red'
    | 'navy'
    | 'purple'
    | 'green'
    | 'magenta'
    | 'teal'
    | 'lightGray'
    | 'darkGray';
};

export type TagProps = MarginProps & {
  color?: TagColorProp['$tagColor'];
  className?: string;
  /**
   * Tag content
   */
  children?: React.ReactNode;
  'data-id'?: string;
  id?: string;
  /**
   * Close button is hidden unless this is provided
   */
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledTag = styled(Box)<TagColorProp & { $hasRemove?: boolean }>`
  ${tagBase}
  ${tagColor}
  ${margin}
`;

const StyledClose = styled.button<TagColorProp>`
  ${closeBase}
  ${closeColor}
`;

const StyledContent = styled.span`
  ${content}
`;

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(function Tag(props, userRef) {
  const { color, children, onRemove, className, 'data-id': dataId, id, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  const closeMarkup = onRemove ? (
    <StyledClose onClick={onRemove} $tagColor={color} type="button">
      <Close size={16} />
      <ScreenReaderOnly>Remove</ScreenReaderOnly>
    </StyledClose>
  ) : null;

  return (
    <StyledTag
      as="span"
      className={className}
      data-id={dataId}
      id={id}
      $tagColor={color}
      $hasRemove={!!onRemove}
      {...systemProps}
      ref={userRef}
    >
      <StyledContent>{children}</StyledContent>
      {closeMarkup}
    </StyledTag>
  );
});

Tag.displayName = 'Tag';
export default Tag;
