import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Snackbar, Icon } from '../src';


export default storiesOf('Snackbar', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Default', () => (
    <Snackbar onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  ))

  .addWithInfo('Success', () => (
    <Snackbar status='success' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  ))

  .addWithInfo('Danger', () => (
    <Snackbar status='danger' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  ));
