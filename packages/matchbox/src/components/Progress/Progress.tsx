import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps, compose } from 'styled-system';
import Step from './Step';
import { pick } from '../../helpers/props';

const system = compose(margin);

const Wrapper = styled.div`
  ${system}
`;

export type ProgressProps = MarginProps & {
  children?: React.ReactNode;
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(function Progress(props, userRef) {
  const { children, ...rest } = props;
  const systemProps = pick(rest, system.propNames);

  return (
    <Wrapper {...systemProps} ref={userRef}>
      {children}
    </Wrapper>
  );
}) as React.ForwardRefExoticComponent<ProgressProps> & {
  Step: typeof Step;
};

Progress.displayName = 'Progress';
Progress.Step = Step;
export default Progress;
