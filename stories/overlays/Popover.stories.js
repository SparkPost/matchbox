import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Popover, Button, TextField, ActionList } from '@sparkpost/matchbox';

class ControlledPopover extends React.Component {
  state = {
    open: false,
    count: 0
  }

  open = () => {
    this.setState({ open: true });
  }

  close = () => {
    this.incClose();
    this.setState({ open: false });
  }

  incClose = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <p>State: {this.state.open ? 'open' : 'closed' }</p>
        <p>Close Count: {this.state.count}</p>
        <br/>
        <Popover
          top
          sectioned
          onClose={this.close}
          open={this.state.open}
          trigger={<Button onClick={this.open}>Open Me</Button>}>
            <p>I am controlled</p>
          <Button onClick={this.close}>Close me</Button>
        </Popover>
      </React.Fragment>
    )
  }
}

storiesOf('Overlays|Popover', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Uncontrolled open state', withInfo()(() => (
    <Popover sectioned
      style={{ width: '400px' }}
      trigger={<Button onClick={action('Trigger Click')}>Button</Button>}>
        <div>Popover Content</div>
    </Popover>
  )))

  .add('with an ActionList', withInfo()(() => (
    <div style={{ paddingLeft: 100 }}>
      <Popover
        left
        trigger={<Button>More Actions</Button>}
        style={{ width: '200px' }}>
        <ActionList
          actions={[
            { content: 'Edit' },
            { content: 'Delete', selected: true },
            { content: 'Test' }
          ]}
          sections={[
            [
              { content: 'Sectioned1' },
              { content: 'Sectioned2' }
            ]
          ]}
        />
      </Popover>
    </div>
  )))

  .add('with a controlled open state', withInfo({
    source: false,
    propTables: [Popover],
    propTablesExclude: [ControlledPopover],
    text: 'Manually set the `open` prop to take full control of the Popovers open state.'
  })(() => (
    <ControlledPopover />
  )))
