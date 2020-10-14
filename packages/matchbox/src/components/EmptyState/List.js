import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { StyledList } from './styles';

const StyledSvg = styled.svg`
  position: absolute;
  left: 3px;
  top: 18px;
  height: calc(100% - 3px);
  pointer-events: none;
`;

const List = React.forwardRef(function List(props, userRef) {
  const { children } = props;

  return (
    <StyledList as="ul" mt="500" position="relative" ref={userRef}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          children: (
            <div>
              {child.props.children}
              {index < children.length - 1 && (
                <StyledSvg>
                  <g stroke={tokens.color_blue_700} stroke-width="2">
                    <path
                      stroke-dasharray="3,7"
                      d="M1 2 l0 200"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </StyledSvg>
              )}
            </div>
          ),
        });
      })}
    </StyledList>
  );
});

List.displayName = 'EmptyState.List';

List.propTypes = {
  children: PropTypes.node,
};

export default List;
