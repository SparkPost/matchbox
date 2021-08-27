import React from 'react';
import styled from 'styled-components';
import { ArrowUpward, ArrowDownward } from '@sparkpost/matchbox-icons';
import { focusOutline, buttonReset } from '../../styles/helpers';

const Button = styled.button<{ $sorted?: boolean }>`
  ${buttonReset}
  ${focusOutline()}
  display: inline-flex;
  text-align: left;
  cursor: pointer;

  ${({ theme }) => `
    padding: ${theme.space[100]} ${theme.space[200]};
    margin-left: -${theme.space[200]};
    margin-right: -${theme.space[200]};
    margin-top: -${theme.space[100]};
    margin-bottom: -${theme.space[100]};
    border: 1px solid transparent;
    border-radius: ${theme.radii[200]};
    transition: ${theme.motion.duration.fast};
  `}

  ${({ $sorted, theme }) =>
    $sorted
      ? `
    background: ${theme.colors.blue[200]};
    color: ${theme.colors.blue[700]};
  `
      : ''}

  &:hover {
    ${({ theme }) => `
      background: ${theme.colors.blue[200]};
      color: ${theme.colors.blue[700]};
      border: 1px solid ${theme.colors.blue[700]};
    `}
  }
`;

const IconWrapper = styled.span<{ $sorted?: boolean }>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space[100]};
  color: ${({ theme }) => theme.colors.gray[700]};
  transition: ${({ theme }) => theme.motion.duration.fast};

  ${({ $sorted, theme }) => ($sorted ? `color: ${theme.colors.blue[700]};` : '')}

  ${Button}:hover & {
    color: ${({ theme }) => theme.colors.blue[700]};
  }
`;

const UnsortedWrapper = styled.span`
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;

  svg {
    position: absolute;
  }

  svg:first-child {
    top: 0px;
    left: 0px;
  }

  svg:last-child {
    bottom: -4px;
    right: 0px;
  }
`;

function Unsorted(): JSX.Element {
  return (
    <UnsortedWrapper>
      <ArrowUpward size={14} />
      <ArrowDownward size={14} />
    </UnsortedWrapper>
  );
}

type TableSortButtonProps = {
  children?: React.ReactNode;
  direction?: 'asc' | 'desc';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
};

const SortButton = React.forwardRef<HTMLButtonElement, TableSortButtonProps>(function SortButton(
  props,
  userRef,
) {
  const { children, direction, onClick, onFocus, onBlur } = props;

  const Icon = React.useMemo(() => {
    if (direction === 'asc') {
      return ArrowUpward;
    }

    if (direction === 'desc') {
      return ArrowDownward;
    }

    return Unsorted;
  }, [direction]);

  const sorted = React.useMemo(() => {
    return ['asc', 'desc'].includes(direction);
  }, [direction]);

  return (
    <Button
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={userRef}
      type="button"
      $sorted={sorted}
    >
      <span>{children}</span>
      <IconWrapper $sorted={sorted}>
        <Icon size={16} />
      </IconWrapper>
    </Button>
  );
});

SortButton.displayName = 'Table.SortButton';
export default SortButton;
