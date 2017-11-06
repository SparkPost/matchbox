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
  .addWithInfo('Primary',
  () => (
    <Tag onRemove={action('Tag Remove')} primary>domain.com</Tag>
  ))
  .addWithInfo('Secondary',
  () => (
    <Tag onRemove={action('Tag Remove')} secondary>domain.com</Tag>
  ))
  .addWithInfo('Outline',
  () => (
    <Tag onRemove={action('Tag Remove')} outline>domain.com</Tag>
  ));
