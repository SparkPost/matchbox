import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import * as icons from '@sparkpost/matchbox-icons';
const Assessment = icons.Assessment;

storiesOf('Icons', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('single icon', withInfo()(() => (
    <Assessment size={50} />
  )))

  .add('all icons', () => {
    const renderIcons = Object.keys(icons).map((name, i) => {
      const Icon = icons[name];

      return (
        <span style={{ display: 'inline-block', width: '220px', margin: '30px 0', textAlign: 'center'}}>
          <Icon size={50} />
          <p>{'<'}{ name } {'/>'}</p>
        </span>
      )
    });

    return <div>{ renderIcons }</div>;
  });
