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
  .addWithInfo('Orange',
  () => (
    <Tag onRemove={action('Tag Remove')} orange>domain.com</Tag>
  ))
  .addWithInfo('Blue',
  () => (
    <Tag onRemove={action('Tag Remove')} blue>domain.com</Tag>
  ))
  .addWithInfo('Yellow',
  () => (
    <Tag onRemove={action('Tag Remove')} yellow>domain.com</Tag>
  ))
  .addWithInfo('Green',
  () => (
    <Tag onRemove={action('Tag Remove')} green>domain.com</Tag>
  ));
