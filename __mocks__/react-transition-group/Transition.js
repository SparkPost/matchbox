import React from 'react';

// See: https://stackoverflow.com/questions/36550906/disable-reacts-csstransitiongroup-in-test/51663621#51663621
export default props => <div>{props.in ? props.children() : null}</div>;
