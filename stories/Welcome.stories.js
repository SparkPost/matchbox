import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryContainer from './helpers/StoryContainer';

export default storiesOf('Welcome', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .add('to Matchbox', () => (
    <div>
      <h1>Welcome to Matchbox</h1>
      <p>
        This is a component dev environment for the <a href='http://github.com/SparkPost/2web2ui/' target='_blank'>SparkPost React WebUI</a>.
      </p>
    </div>
  ));
