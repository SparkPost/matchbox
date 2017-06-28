import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Icon } from '../src';
import * as icons from '../src/icons';

storiesOf('Icons', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('single icon', () => (
    <div>
      <Icon name='InsertChart' size={90} />
    </div>
  ))

  .add('all icons', () => {
    const renderIcons = Object.keys(icons).map((icon, i) => {
      const name = icon.replace('Md', '');
      return (
        <span style={{ display: 'inline-block', width: '220px', margin: '30px 0', textAlign: 'center'}}>
          <Icon name={name} size={50} />
          <p>{ name }</p>
        </span>
      )
    });
    return (
      <div>
        { renderIcons }
      </div>
    );
  });
