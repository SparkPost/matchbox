import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

Group.propTypes = {
  children: PropTypes.node.isRequired
};

Group.displayName = 'Button.Group';

export default Group;
