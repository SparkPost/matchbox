import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { WindowEvent } from '@sparkpost/matchbox';

describe('WindowEvent', () => {
  add('keydown', () => (
    <>
      <p>
        This component does not render anything, but hit your keyboard and watch the action logger.
        This component handles event binding for you.
      </p>
      <WindowEvent event="keydown" handler={() => console.log('Keydown')} />
    </>
  ));
});
