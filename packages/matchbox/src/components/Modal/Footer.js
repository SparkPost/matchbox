import React from 'react';
import PropTypes from 'prop-types';
import { getChild } from '../../helpers/children';
import { Panel } from '../Panel';

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
    padding: '0',
    flat: true,
  },
};

const Footer = React.forwardRef(function Footer({ children }, ref) {
  let buttons = getChild('Button', children);

  return (
    <Panel borderLeft="none" borderRight="none" borderBottom="none" sectioned ref={ref}>
      {buttons &&
        buttons.map((button, index) => {
          return React.cloneElement(button, buttonProps[index]);
        })}
    </Panel>
  );
});

Footer.displayName = 'Modal.Footer';
Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
