import React from 'react';
import PropTypes from 'prop-types';
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

const Footer = React.forwardRef(function Footer({ children }, ref) {
  const buttons = React.Children.toArray(children);

  return (
    <Panel borderLeft="none" borderRight="none" borderBottom="none" ref={ref}>
      <Panel.Section>
        {buttons && (
          <Box display="flex" justifyContent="space-between">
            <Inline space="300">
              {buttons[0] && React.cloneElement(buttons[1], getButtonProps(0, buttons[0]))}
              {buttons[1] && React.cloneElement(buttons[1], getButtonProps(1, buttons[1]))}
            </Inline>
            {buttons[2] && (
              <Box>
                {buttons[2] && React.cloneElement(buttons[2], getButtonProps(2, buttons[2]))}
              </Box>
            )}
          </Box>
        )}
      </Panel.Section>
    </Panel>
  );
});

Footer.displayName = 'Modal.Footer';
Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
