import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Expandable, Panel } from '@sparkpost/matchbox';

storiesOf('Layout|Expandable', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('with image title and subtitle', withInfo({ propTablesExclude: [Panel] })(() => (
    <Panel sectioned>
      <Expandable title='Slack' subtitle='Integrate alerts into your teams Slack channels'>
        Content here
      </Expandable>
    </Panel>
  )))

  .add('controlled open state', (() => {
    function ControlledExample({ title }) {
      const [open, setOpen] = React.useState(false);
      action('test')
      function onToggle() {

        setOpen(!open);
        action('Controlling open state:')(open);
      }

      return (
          <Expandable
            open={open}
            title={title}
            subtitle={`Integrate alerts into your teams ${title} channels`}
            onToggle={onToggle}
          >
            Content {title} here
          </Expandable>
      )
    }

    return (
      <Panel sectioned>
        <ControlledExample title='Foo' />
        <ControlledExample title='Bar' />
        <ControlledExample title='Baz' />
      </Panel>
    )

  }));
