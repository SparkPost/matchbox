import React from 'react';
import styled from 'styled-components';
import { buttonReset, focusOutline } from '../../styles/helpers';
import { Box } from '../Box';
import type * as Polymorphic from '../../helpers/types';

const Container = styled.button<{ $selected?: boolean }>`
  ${buttonReset}
  position: relative;
  cursor: pointer;
  width: 100%;
  outline: none;

  svg circle {
    transition: ${({ theme }) => theme.motion.duration.fast};
  }

  svg [data-id='mb-tab-line'] {
    stroke: ${({ theme }) => theme.colors.gray[700]};
  }

  svg [data-id='mb-tab-outer'] {
    fill: ${({ theme }) => theme.colors.white};
    stroke: ${(props) =>
      props.$selected ? props.theme.colors.blue[700] : props.theme.colors.gray[700]};
  }

  svg [data-id='mb-tab-inner'] {
    fill: ${(props) => (props.$selected ? props.theme.colors.blue[700] : 'transparent')};
  }

  &:hover {
    svg [data-id='mb-tab-outer'] {
      stroke: ${({ theme, $selected }) =>
        !$selected ? theme.colors.gray[800] : theme.colors.blue[700]};
    }
    svg [data-id='mb-tab-inner'] {
      fill: ${({ theme, $selected }) =>
        !$selected ? theme.colors.gray[400] : theme.colors.blue[700]};
    }
  }

  &:last-child {
    svg line {
      display: none;
    }
  }
`;

const FocusSvg = styled.div`
  width: 24px;
  height: 24px;

  ${Container}:focus & {
    ${focusOutline({ modifier: '&', offset: '1px', radius: '50%' })}
  }

  ${Container}:focus:not(:focus-visible) &:after {
    box-shadow: none;
  }

  ${Container}:focus-visible & {
    ${focusOutline({ modifier: '&', offset: '1px', radius: '50%' })}
  }
`;

export type TimelineTabsTabProps = {
  'data-id'?: string;
  handleParentSelect?: () => void;
  selected?: boolean;
};

type PolymorphicTab = Polymorphic.ForwardRefComponent<'button', TimelineTabsTabProps>;

const Tab = React.forwardRef(function Tab(props, userRef) {
  const {
    as = 'button',
    'aria-controls': ariaControls,
    children,
    'data-id': dataId,
    id,
    handleParentSelect,
    onClick,
    selected,
    ...rest
  } = props;

  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
    handleParentSelect();
  }

  return (
    <Container
      aria-controls={ariaControls}
      aria-selected={selected}
      as={as}
      data-id={dataId}
      id={id}
      onClick={handleClick}
      ref={userRef}
      role="tab"
      $selected={selected}
      tabIndex={selected ? 0 : -1}
      type="button"
      {...rest}
    >
      <Box display="grid" gridTemplateColumns="30px 1fr" gridGap="200">
        <Box position="relative" height="100%" gridColumn="0/1">
          <Box
            position="absolute"
            width="2px"
            height="100%"
            top="2px"
            left="35%"
            bg="red"
            zIndex="below"
            overflow="hidden"
          >
            <svg width="5px" height="200px">
              <line
                data-id="mb-tab-line"
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="black"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
            </svg>
          </Box>
          <FocusSvg>
            <svg width="25px" height="25px">
              <circle
                data-id="mb-tab-outer"
                cx="12"
                cy="12"
                r="11"
                fill="transparent"
                strokeWidth="1"
              />
              <circle data-id="mb-tab-inner" cx="12" cy="12" r="5" />
            </svg>
          </FocusSvg>
        </Box>
        <Box textAlign="left" minHeight="800" pb="300">
          {children}
        </Box>
      </Box>
    </Container>
  );
}) as PolymorphicTab;

export default Tab;
