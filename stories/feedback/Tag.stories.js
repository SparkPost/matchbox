import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { Tag } from '@sparkpost/matchbox';
import { Language } from '@sparkpost/matchbox-icons';

storiesOf('Feedback|Tag', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('basic tag', withInfo()(() => (
    <Tag>domain.com <Language/></Tag>
  )))
  .add('with remove action', withInfo()(() => (
    <Tag onRemove={action('Tag Remove')}>domain.com</Tag>
  )))
  .add('colors', withInfo()(() => (
    <div>
      <Tag onRemove={action('Tag Remove')} color='orange'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='blue'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='yellow'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='red'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='navy'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='purple'>domain.com</Tag>{' '}
    </div>
  )));
