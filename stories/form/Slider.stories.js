import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Slider, TextField } from '@sparkpost/matchbox';


storiesOf('Form|Slider', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('basic slider', withInfo({})(() => {
    return (
      <Slider
        aria-controls='test-id'
        data-id='slider-test'
        defaultValue={125}      
        min={100}
        max={150}
      />
    )
  }))

  .add('disabled slider', withInfo({})(() => {
    return (
      <Slider data-id='slider-test' disabled value={75} />
    )
  }))

  .add('slider width ticks', withInfo({})(() => {
    return (
      <div>
        <Slider value={75} ticks={{
          0: '0',
          50: '50',
          25: 'Recommended',
          100: '100',
        }} />
        <Slider disabled value={33} ticks={{
          50: '50',
          25: 'Recommended'
        }} />
      </div>
    )
  }))

  .add('value controlled slider', () => {

    function Example() {
      const [value, setValue] = React.useState(50.1);

      return (
        <React.Fragment>
          <TextField value={value} onChange={(e) => setValue(e.target.value)} />
          <Slider precision={1} max={100} min={-100} value={Number(value)} onChange={(value) => setValue(value)} />
        </React.Fragment>
      )
    }

    return <Example/>;
  });
