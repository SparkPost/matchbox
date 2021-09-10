import React from 'react';
import { padding, PaddingProps } from 'styled-system';
import { pick } from '../../helpers/props';
import { Box } from '../Box';

export type ModalContentProps = {
  children?: React.ReactNode;
  restrictHeight?: boolean;
} & PaddingProps;

const Content = React.forwardRef<HTMLDivElement, ModalContentProps>(function Content(props, ref) {
  const { children, restrictHeight = true, ...rest } = props;
  const systemProps = pick(rest, padding.propNames);

  return (
    <Box
      data-id="modal-content"
      p="500"
      {...systemProps}
      maxHeight={restrictHeight ? '60vh' : null}
      overflowY={restrictHeight ? 'auto' : null}
      ref={ref}
    >
      {children}
    </Box>
  );
});

Content.displayName = 'Modal.Content';

export default Content;
