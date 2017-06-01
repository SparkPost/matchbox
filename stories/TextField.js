import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { whiteBg, StoryContainer } from './helpers';

import { TextField } from '../src';

export default storiesOf('TextField', module).addDecorator(withKnobs)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <TextField />
    </StoryContainer>
  ));
