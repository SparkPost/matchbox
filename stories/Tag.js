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
      <p><Tag onRemove={action('Tag Remove')} color='orange'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='blue'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='yellow'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='red'>domain.com</Tag></p>
    </div>
  )));
