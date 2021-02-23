import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonReset, focusOutline } from '../../styles/helpers';
import { Box } from '../Box';

const Container = styled.button`
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
    stroke: ${props =>
      props.selected ? props.theme.colors.blue[700] : props.theme.colors.gray[700]};
  }

  svg [data-id='mb-tab-inner'] {
    fill: ${props => (props.selected ? props.theme.colors.blue[700] : 'transparent')};
  }

  &:hover {
    svg [data-id='mb-tab-outer'] {
      stroke: ${({ theme, selected }) =>
        !selected ? theme.colors.gray[800] : theme.colors.blue[700]};
    }
    svg [data-id='mb-tab-inner'] {
      fill: ${({ theme, selected }) =>
        !selected ? theme.colors.gray[400] : theme.colors.blue[700]};
    }
  }

  ${'' /* &:focus svg [data-id='mb-tab-outer'] {
    stroke-width: 2;
  } */}

  &:last-child {
    svg line {
      display: none;
    }
  }
`;

const FocusSvg = styled.div`
  width: 24px;
  height: 24px;

  ${Container}:focus-visible & {
    ${focusOutline({ modifier: '&', offset: '1px', radius: '50%' })}
  }
`;

const Tab = React.forwardRef(function Tab(props, userRef) {
  const {
    as = 'button',
    children,
    onClick,
    handleParentSelect,
    selected,
    to,
    href,
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
      aria-controls={rest['aria-controls']}
      aria-selected={selected}
      as={as}
      href={href}
      onClick={handleClick}
      ref={userRef}
      role="tab"
      selected={selected}
      tabIndex={selected ? '0' : '-1'}
      to={to}
      type="button"
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
        <Box textAlign="left" minHeight="800">
          {children}
        </Box>
      </Box>
    </Container>
  );
});

Tab.propTypes = {
  'aria-controls': PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
  handleParentSelect: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  to: PropTypes.string,
};

export default Tab;
