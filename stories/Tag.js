import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Panel, Tag } from '../src';

storiesOf('Tag', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
    <Tag>domain.com</Tag>
  ))
  .addWithInfo('With remove action',
  () => (
    <Tag onRemove={action('Tag Remove')}>domain.com</Tag>
  ))
  .addWithInfo('Colors',
  () => (
    <div>
      <p><Tag onRemove={action('Tag Remove')} color='orange'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='blue'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='yellow'>domain.com</Tag></p>
      <p><Tag onRemove={action('Tag Remove')} color='red'>domain.com</Tag></p>
    </div>
  ));
