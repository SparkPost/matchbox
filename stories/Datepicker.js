import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Datepicker, Panel } from '../src';

storiesOf('Datepicker', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  'Refer to http://react-day-picker.js.org/ for usage. The only props overridden by Matchbox are classNames and navbarElement.',
  () => (
    <Panel>
      <Datepicker
        numberOfMonths={2}
        enableOutsideDays
        fixedWeeks
        initialMonth={new Date(2017, 5)}
        selectedDays={
          {
            from: new Date(2017, 5, 5),
            to: new Date(2017, 5, 10),
          }
        }
        disabledDays={{ after: new Date() }}
        onDayClick={action('Day Clicked')}
      />
    </Panel>
  ));
