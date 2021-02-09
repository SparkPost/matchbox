import React from 'react';
import { styles } from '@sparkpost/matchbox';
import styled from 'styled-components';
import { describe, add } from '@sparkpost/libby-react';

const Hidden = styled.div`
  ${styles.visuallyHidden}
`;

const Reset = styled.button`
  ${styles.buttonReset}
`;

const Focus = styled.button`
  ${styles.focusOutline()}
`;

describe('Style Helpers', () => {
  add('visually hidden', () => (
    <>
      <Hidden>This should be hidden</Hidden>
      <div>But this is not hidden</div>
    </>
  ));
  add('button reset', () => (
    <>
      <Reset>This is a reset button</Reset>
      <button>But this one is not reset</button>
    </>
  ));
  add('focus outline', () => (
    <>
      <Focus>This input has focus styled</Focus>
      <button>This one does not</button>
    </>
  ));
});
