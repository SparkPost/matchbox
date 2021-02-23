import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonReset } from '../../styles/helpers';
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

  &:focus svg [data-id='mb-tab-outer'] {
    stroke-width: 2;
  }

  &:last-child {
    svg line {
      display: none;
    }
  }
`;

const Tab = React.forwardRef(function Tab(props, userRef) {
  const { as = 'button', children, onClick, handleParentSelect, selected, to, href } = props;

  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
    handleParentSelect();
  }

  return (
    <Container
      ref={userRef}
      tabIndex={selected ? '0' : '-1'}
      as={as}
      type="button"
      role="tab"
      aria-selected={selected}
      selected={selected}
      onClick={handleClick}
      to={to}
      href={href}
    >
      <Box display="grid" gridTemplateColumns="30px 1fr" gridGap="200">
        <Box position="relative" height="100%" gridColumn="0/1" overflow="hidden">
          <Box
            as="svg"
            width="5px"
            height="200px"
            position="absolute"
            top="2px"
            left="43%"
            zIndex="below"
          >
            <line
              data-id="mb-tab-line"
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="black"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
          </Box>
          <svg as="svg" width="25px" height="25px">
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
        </Box>
        <Box textAlign="left" minHeight="800">
          {children}
        </Box>
      </Box>
    </Container>
  );
});

Tab.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  handleParentSelect: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  to: PropTypes.string,
};

export default Tab;
