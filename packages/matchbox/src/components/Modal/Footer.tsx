import React from 'react';
import { Panel } from '../Panel';
import { Box } from '../Box';
import { Inline } from '../Inline';

const buttonProps = {
  0: {
    color: 'blue',
    key: 'modal-primary',
  },
  1: {
    color: 'blue',
    variant: 'outline',
    key: 'modal-secondary',
  },
  2: {
    color: 'blue',
    variant: 'text',
    key: 'modal-tertiary',
  },
};

function getButtonProps(index, element) {
  return {
    ...buttonProps[index],
    ...element.props,
  };
}

export type ModalFooterProps = {
  children?: React.ReactNode;
};

const Footer = React.forwardRef<HTMLDivElement, ModalFooterProps>(function Footer(
  { children },
  ref,
) {
  const buttons = React.Children.toArray(children);

  return (
    <Panel borderLeft="none" borderRight="none" borderBottom="none" ref={ref}>
      <Panel.Section>
        {buttons && (
          <Box display="flex" justifyContent="space-between">
            <Inline space="300">
              {buttons[0] &&
                React.cloneElement(
                  buttons[0] as React.ReactElement<any>,
                  getButtonProps(0, buttons[0]),
                )}
              {buttons[1] &&
                React.cloneElement(
                  buttons[1] as React.ReactElement<any>,
                  getButtonProps(1, buttons[1]),
                )}
            </Inline>
            {buttons[2] && (
              <Box>
                {buttons[2] &&
                  React.cloneElement(
                    buttons[2] as React.ReactElement<any>,
                    getButtonProps(2, buttons[2]),
                  )}
              </Box>
            )}
          </Box>
        )}
      </Panel.Section>
    </Panel>
  );
});

Footer.displayName = 'Modal.Footer';

export default Footer;
