import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '@styled-system/props';

const Container = styled.div`
  ${padding}
`;

const Content = React.forwardRef(function Content(props, ref) {
  const systemProps = pick(props);
  // TODO need to offset footer height
  return (
    <Container data-id="drawer-content" p="500" {...systemProps} ref={ref}>
      {props.children}
    </Container>
  );
});

Content.displayName = 'Drawer.Content';
Content.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(padding.propNames),
};

export default Content;
