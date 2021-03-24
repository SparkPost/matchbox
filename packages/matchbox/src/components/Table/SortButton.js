import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowUpward, ArrowDownward } from '@sparkpost/matchbox-icons';
import { focusOutline, buttonReset } from '../../styles/helpers';

const Button = styled.button`
  ${buttonReset}
  ${focusOutline()}
  
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: ${({ theme }) => theme.space[100]} ${({ theme }) => theme.space[200]};
  margin-left: -${({ theme }) => theme.space[200]};
  margin-right: -${({ theme }) => theme.space[200]};
  margin-top: -${({ theme }) => theme.space[100]};
  margin-bottom: -${({ theme }) => theme.space[100]};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii[200]};

  transition: ${({ theme }) => theme.motion.duration.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.blue[200]};
    color: ${({ theme }) => theme.colors.blue[700]};
    border: 1px solid ${({ theme }) => theme.colors.blue[700]};
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  transition: ${({ theme }) => theme.motion.duration.fast};

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

function Unsorted() {
  return (
    <UnsortedWrapper>
      <ArrowUpward size={14} />
      <ArrowDownward size={14} />
    </UnsortedWrapper>
  );
}

const SortButton = React.forwardRef(function SortButton(props, userRef) {
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

  return (
    <Button onClick={onClick} onFocus={onFocus} onBlur={onBlur} ref={userRef} type="button">
      <span>{children}</span>
      <IconWrapper>
        <Icon size={18} />
      </IconWrapper>
    </Button>
  );
});

SortButton.displayName = 'Table.SortButton';
SortButton.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['asc', 'desc', null, undefined]),
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

export default SortButton;
