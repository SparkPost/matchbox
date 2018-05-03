import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Panel, Tag } from '../src';

storiesOf('Tag', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default',
  withInfo()(() => (
    <Tag>domain.com</Tag>
  )))
  .add('With remove action',
  withInfo()(() => (
    <Tag onRemove={action('Tag Remove')}>domain.com</Tag>
  )))
  .add('Colors',
  withInfo()(() => (
    <div>
      <Tag onRemove={action('Tag Remove')} color='orange'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='blue'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='yellow'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='red'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='navy'>domain.com</Tag>{' '}
      <Tag onRemove={action('Tag Remove')} color='purple'>domain.com</Tag>{' '}
    </div>
  )));
