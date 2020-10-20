import React from 'react';
import { styles } from '@sparkpost/matchbox';
import styled from 'styled-components';

export default {
  title: 'Utility/StyleHelpers',
};

const Hidden = styled.div`
  ${styles.visuallyHidden}
`;

export const VisuallyHidden = () => {
  return (
    <>
      <Hidden>This should be hidden</Hidden>
      <div>But this is not hidden</div>
    </>
  );
};

const Reset = styled.button`
  ${styles.buttonReset}
`;

export const ButtonReset = () => {
  return (
    <>
      <Reset>This is a reset button</Reset>
      <button>But this one is not reset</button>
    </>
  );
};

const Focus = styled.button`
  ${styles.focusOutline()}
`;

export const FocusOutline = () => {
  return (
    <>
      <Focus>This input has focus styled</Focus>
      <button>This one does not</button>
    </>
  );
};
