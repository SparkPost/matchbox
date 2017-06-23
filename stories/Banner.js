import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { whiteBg, StoryContainer } from './helpers';

import { Banner, Icon } from '../src';

const primaryAction = {
  content: 'Action',
  onClick: action('Edit Clicked')
};

export default storiesOf('Banner', module)

  .add('Default', () => (
    <StoryContainer bg='white'>
      {/* <Icon name='Check'/> */}
      <Icon name='ZoomOut'/>
      <Banner
        title='This is a title'
        status='success'
        action={primaryAction}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi consequatur accusamus praesentium repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>

      <br />

      <Banner title='This is a title' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi consequatur accusamus praesentium repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>
    </StoryContainer>
  ));
