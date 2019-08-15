import React from 'react';

// Forces effects to run before each render
// See: https://github.com/facebook/react/issues/14050
module.exports = { ...React, useEffect: React.useLayoutEffect }
