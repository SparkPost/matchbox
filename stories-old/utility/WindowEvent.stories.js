import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { WindowEvent } from '@sparkpost/matchbox';

storiesOf('Utility|WindowEvent', module).add(
  'basic window event',
  withInfo(
    'This component does not render anything, but hit your keyboard and watch the action logger. This component handles event binding for you.',
  )(() => <WindowEvent event="keydown" handler={action('Keydown')} />),
);
