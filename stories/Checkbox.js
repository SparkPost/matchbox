import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Checkbox } from '../src';

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
    return (
      <Checkbox
        id='id'
        label='Check me'
        checked={this.state.checked}
        onChange={ () => this.handleChange() }
      />
    )
  }
}

export default storiesOf('Checkbox', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  'This component is built to work with redux-form. A custom wrapper is shown here to handle the checked prop without redux-form. Check the story in /stories/Checkbox.js for details.',
  () => (
    <CheckboxWrapper />
  ));
