import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Tag } from '../src';

storiesOf('Tag', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
    <Tag onRemove={action('Tag Remove')}>domain.com</Tag>
  ));
