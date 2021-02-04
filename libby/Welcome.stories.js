import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('to Matchbox', () => (
  <div>
    <h1>Welcome to Matchbox</h1>
    <p>
      This is a component dev environment for the{' '}
      <a href="http://github.com/SparkPost/2web2ui/" target="_blank">
        SparkPost React WebUI
      </a>
      .
    </p>
  </div>
));
