import React from 'react';
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

type EmptyStateListProps = {
  children?: React.ReactNode;
};

const List = React.forwardRef<HTMLUListElement, EmptyStateListProps>(function List(props, userRef) {
  const { children } = props;

  return (
    <StyledList as="ul" mt="500" position="relative" ref={userRef}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        return React.cloneElement(child, {
          children: (
            <div>
              {child.props.children}
              {index < React.Children.toArray(children).length - 1 && (
                <StyledSvg>
                  <g stroke={tokens.color_blue_700} strokeWidth="2">
                    <path
                      strokeDasharray="3,7"
                      d="M1 2 l0 200"
                      strokeWidth="2"
                      strokeLinecap="round"
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
export default List;
