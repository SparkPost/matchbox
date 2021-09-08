import React from 'react';
import styled from 'styled-components';
import { padding, PaddingProps } from 'styled-system';
import { pick } from '@styled-system/props';

const Container = styled.div`
  ${padding}
`;

export type DrawerContentProps = PaddingProps & {
  children?: React.ReactNode;
};

const Content = React.forwardRef<HTMLDivElement, DrawerContentProps>(function Content(props, ref) {
  const systemProps = pick(props);

  return (
    <Container data-id="drawer-content" p="500" {...systemProps} ref={ref}>
      {props.children}
    </Container>
  );
});

Content.displayName = 'Drawer.Content';
export default Content;
