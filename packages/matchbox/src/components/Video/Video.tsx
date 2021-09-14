import React from 'react';
import { layout, LayoutProps, margin, MarginProps, compose } from 'styled-system';
import styled from 'styled-components';
import { pick } from '../../helpers/props';
import Source from './Source';

const system = compose(layout, margin);

const StyledFigure = styled.figure`
  ${system}
`;

export type VideoProps = {
  autoPlay?: boolean;
  role?: string;
  children?: React.ReactNode;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
} & LayoutProps &
  MarginProps;

const Video = React.forwardRef<HTMLImageElement, VideoProps>(function Video(props, userRef) {
  const {
    autoPlay = true,
    role,
    children,
    controls = false,
    loop = false,
    muted = true,
    ...rest
  } = props;

  const systemProps = pick(rest, system.propNames);

  return (
    <StyledFigure role={role} ref={userRef} {...systemProps}>
      <video width="100%" autoPlay={autoPlay} controls={controls} loop={loop} muted={muted}>
        {children}
      </video>
    </StyledFigure>
  );
}) as React.ForwardRefExoticComponent<VideoProps> & {
  Source: typeof Source;
};

Video.displayName = 'Video';

Video.Source = Source;

export default Video;
