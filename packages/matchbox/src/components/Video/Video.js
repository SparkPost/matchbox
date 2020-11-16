import React from 'react';
import PropTypes from 'prop-types';
import { layout, margin, compose } from 'styled-system';
import styled from 'styled-components';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/systemProps';
import Source from './Source';

const system = compose(layout, margin);

const StyledFigure = styled.figure`
  ${system}
`;

const Video = React.forwardRef(function Video(props, userRef) {
  const { autoPlay, role, children, controls, loop, muted, ...rest } = props;

  const systemProps = pick(rest, system.propNames);

  return (
    <StyledFigure role={role} ref={userRef} {...systemProps}>
      <video width="100%" autoPlay={autoPlay} controls={controls} loop={loop} muted={muted}>
        {children}
      </video>
    </StyledFigure>
  );
});

Video.displayName = 'Video';

Video.propTypes = {
  autoPlay: PropTypes.bool,
  role: PropTypes.string,
  children: PropTypes.node,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(layout.propNames),
};

Video.defaultProps = {
  autoPlay: true,
  controls: false,
  loop: false,
  muted: true,
};

Video.Source = Source;

export default Video;
