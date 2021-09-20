import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { WindowEvent, useWindowEvent } from '@sparkpost/matchbox';

describe('WindowEvent', () => {
  add('keydown', () => (
    <>
      <p>
        This component does not render anything, but hit your keyboard and watch the action logger.
        This component handles event binding for you.
      </p>
      <WindowEvent
        event="keydown"
        handler={(e) => {
          console.log(e.key);
          console.log('Keydown');
        }}
      />
    </>
  ));

  add('hook', () => {
    useWindowEvent('keydown', function (e) {
      // This should be KeyboardEvent
      console.log(e.key);
    });

    return <div>view dev console</div>;
  });
});
