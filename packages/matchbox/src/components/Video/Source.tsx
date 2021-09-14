import React from 'react';

export type VideoSourceProps = {
  src: string;
  className?: string;
  type?: string;
};

const Source = React.forwardRef<HTMLSourceElement, VideoSourceProps>(function Source(
  props,
  userRef,
) {
  const { src, type, className } = props;

  return <source className={className} src={src} ref={userRef} type={type}></source>;
});

Source.displayName = 'Video.Source';

export default Source;
