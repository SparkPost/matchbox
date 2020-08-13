import React from 'react';
import PropTypes from 'prop-types';
import { getChild } from '../../helpers/children';
import { Panel } from '../Panel';
import { Box } from '../Box';

const buttonProps = {
  0: {
    color: 'blue',
    mr: '400',
  },
  1: {
    color: 'blue',
    outlineBorder: true,
    mr: '400',
  },
  2: {
    color: 'blue',
    flat: true,
  },
};

function getButtonProps(index, element) {
  return {
    ...buttonProps[index],
    ...element.props,
  };
}

const Footer = React.forwardRef(function Footer({ children }, ref) {
  let buttons = getChild('Button', children);

  return (
    <Panel borderLeft="none" borderRight="none" borderBottom="none" ref={ref}>
      <Panel.Section>
        <Box display="flex" justifyContent="space-between">
          <Box>
            {buttons[0] && React.cloneElement(buttons[0], getButtonProps(0, buttons[0]))}
            {buttons[1] && React.cloneElement(buttons[1], getButtonProps(1, buttons[1]))}
          </Box>
          {buttons[2] && (
            <Box>{buttons[2] && React.cloneElement(buttons[2], getButtonProps(2, buttons[2]))}</Box>
          )}
        </Box>
      </Panel.Section>
    </Panel>
  );
});

Footer.displayName = 'Modal.Footer';
Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
