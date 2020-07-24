import React from 'react';
import Legacy from './legacy/Panel';

const Panel = React.forwardRef(function Panel() {});

Panel.displayName = Panel;
Panel.LEGACY = Legacy;

export default Panel;
