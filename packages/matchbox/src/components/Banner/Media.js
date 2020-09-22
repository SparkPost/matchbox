import React from 'react';

const Media = React.forwardRef(function Media(props, userRef) {
  return <div ref={userRef}>Media</div>;
});

Media.displayName = 'Banner.Media';

export default Media;
