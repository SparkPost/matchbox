import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Snackbar, Icon } from '../src';


export default storiesOf('Snackbar', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Default', withInfo()(() => (
    <Snackbar onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )))

  .add('Success', withInfo()(() => (
    <Snackbar status='success' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )))

  .add('Danger', withInfo()(() => (
    <Snackbar status='danger' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )));
