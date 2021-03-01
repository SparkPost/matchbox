import React from 'react';
import styled from 'styled-components';
import { UnstyledLink } from '../UnstyledLink';
import { tabStyles } from './styles';

// TODO Replace this when styled-components supports shouldForwardProps
// See: https://github.com/styled-components/styled-components/commit/e02109e626ed117b76f220d0b9b926129655262d
// Or when UnstyledLink is updated to use system props
const LinkWrapper = React.forwardRef(function LinkWrapper(props, ref) {
  const { selected, fitted, ...rest } = props;
  return <UnstyledLink ref={ref} {...rest} />;
});

const StyledTab = styled(LinkWrapper)`
  ${tabStyles}
`;

const Tab = React.forwardRef(function Tab(props, ref) {
  const { index, content, selected, fitted, component, Component, tabIndex, type, ...rest } = props;

  function handleClick(event) {
    const { index, onClick } = props;
    onClick(event, index);
  }

  // Buttons ensure focusability
  // Links will be focusable with an href
  // TODO deprecate `Component`
  const wrapper = component || Component || 'button';

  return (
    <StyledTab
      aria-selected={selected === index}
      as={wrapper}
      selected={selected === index}
      fitted={fitted}
      ref={ref}
      {...rest}
      onClick={handleClick}
      role="tab"
      tabIndex={tabIndex}
      // Safari overwrites the button reset styles
      // if the element is an 'a' with this attribute
      type={wrapper === 'button' ? 'button' : type}
    >
      {content}
    </StyledTab>
  );
});

Tab.displayName = 'Tab';

export default Tab;
