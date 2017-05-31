import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import backgrounds from 'react-storybook-addon-backgrounds';
import { bgColors, StoryContainer } from './helpers';

import { Button } from '../src';

export default storiesOf('Button', module).addDecorator(backgrounds(bgColors))
  .add('all sizes and colors', () => (
    <StoryContainer>
      <Button onClick={action('click!')} size='small'>Default</Button>
      <br/>
      <Button onClick={action('click!')}>Default</Button>
      <br/>
      <Button onClick={action('click!')} size='large'>Default</Button>
      <br/>

      <Button onClick={action('click!')} primary size='small'>Primary</Button>
      <br/>
      <Button onClick={action('click!')} primary>Primary</Button>
      <br/>
      <Button onClick={action('click!')} primary size='large'>Primary</Button>
      <br/>

      <Button onClick={action('click!')} destructive size='small'>Destructive</Button>
      <br/>
      <Button onClick={action('click!')} destructive>Destructive</Button>
      <br/>
      <Button onClick={action('click!')} destructive size='large'>Destructive</Button>
      <br/>

      <Button onClick={action('click!')} plain size='small'>Plain</Button>
      <br/>
      <Button onClick={action('click!')} plain>Plain</Button>
      <br/>
      <Button onClick={action('click!')} plain size='large'>Plain</Button>
    </StoryContainer>
  ));
