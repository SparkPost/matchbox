import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Checkbox, TextField } from '../src';

class CheckboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    }
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const { label } = this.props;
    return (
      <Checkbox
        id={label}
        label={label}
        checked={this.state.checked}
        onChange={ () => this.handleChange() }
      />
    )
  }
};

export default storiesOf('Checkbox', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Default', () => (
    <Checkbox
      id='id'
      label='Check Me'
     />
  ))

  .addWithInfo('Without Label', () => (
    <Checkbox
      id='id'
      label='Check Me'
      labelHidden
     />
  ))

  .addWithInfo('Disabled', () => (
    <Checkbox
      id='id'
      label='Check Me'
      disabled
     />
  ))

  .addWithInfo('With help text', () => (
    <Checkbox
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  ))

  .addWithInfo('Group',
  'This component only styles its children with correct spacing.',
  () => (
    <div>
      <Checkbox
        id='id'
        label='Parent'
        helpText='Toggle all'
      />
      <Checkbox.Group>
        <Checkbox
          id='id2'
          label='Check Me' />
        <Checkbox
          id='id3'
          label='Check Me' />
        <Checkbox
          id='id4'
          label='Check Me' />
      </Checkbox.Group>
    </div>
  ));
