import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { ActionList, Popover, Button, TextField, Panel } from '../src';

class DemoTypeahead extends Component {
  state = {
    open: false
  }

  render() {
    return (
      <div style={{ maxWidth: '500px', position: 'relative' }}>
        <TextField
          placeholder='Search Subbaccount'
          onClick={action('Trigger Click')}
          onChange={() => this.setState({ open: true }) }
          onBlur={() => this.setState({ open: false })}/>
          { this.state.open
          ? <div
              style={{
                position: 'absolute',
                marginTop: '1px',
                top: '100%',
                left: '0',
                right: '0',
                background: '#fff',
                border: '1px solid #e5e5e5'
              }}>
              <ActionList
              actions={[
                { content: 'Sub 1' },
                { content: 'Sub 2' },
                { content: 'Sub 3' },
                { content: 'Sub 4' },
                { content: 'Sub 5' },
              ]}/>
            </div>
          : null }

      </div>
    );
  }
}

storiesOf('ActionList', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('within a Popover',
  withInfo()(() => (
    <Popover
      open={true}
      trigger={<Button>More Actions</Button>}
      style={{ width: '200px' }}>
      <ActionList
        actions={[
          { content: 'Edit' },
          { content: 'Delete', selected: true },
          { content: 'Test' }
        ]}
        sections={[
          { actions: [
              { content: 'Sectioned1' },
              { content: 'Sectioned2' }
            ] }
        ]}
      />
    </Popover>
  )))
  .add('within a custom component',
  () => (
    <DemoTypeahead />
  ));
