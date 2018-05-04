import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Modal, Panel, Button, Grid } from '../src';

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleChange = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { label } = this.props;
    return (
      <div>
        <a onClick={this.handleChange}>Open modal</a>
        <Modal open={this.state.open} onClose={this.handleChange}>
          <Panel title="Delete Template" sectioned accent>
            <p>Are you sure you want to delete your template?</p>
            <Button style={{ marginRight: '1rem' }} primary onClick={this.handleChange}>Delete</Button>
            <Button onClick={this.handleChange}>Cancel</Button>
          </Panel>
        </Modal>
      </div>
    )
  }
};

export default storiesOf('Modal', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Open', () => {
    return (
      <Modal open>
        <Panel title="Delete Template" sectioned accent>
          <p>Are you sure you want to delete your template?</p>
          <Button style={{ marginRight: '1rem' }} primary>Delete</Button>
          <Button>Cancel</Button>
        </Panel>
      </Modal>
    )
  })

  .add('Toggle Example', withInfo()(() => {
    return (
      <span>
        <ModalDemo />

        {/* This is only here to display props below */}
        <Modal/>
      </span>
    )
  }));
