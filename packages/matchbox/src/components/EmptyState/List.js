import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { StyledList } from './styles';

const List = React.forwardRef(function List(props, userRef) {
  const { children } = props;

  return (
    <StyledList as="ul" mt="500" position="relative" ref={userRef}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { children: <div>{children} Hello</div> });
      })}
      <svg>
        <g stroke={tokens.color_blue_700} stroke-width="2" fill="green" fill-rule="evenodd">
          <path stroke-dasharray="4,6" d="M1 2 l0 100%" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    </StyledList>
  );
});

List.displayName = 'EmptyState.List';

List.propTypes = {
  children: PropTypes.node,
};

export default List;
