import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Toggle } from '../src';

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

export default storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Default', () => (
    <Toggle
      id='id'
     />
  ))

  .addWithInfo('Disabled', () => (
    <Toggle
      id='id'
      disabled
     />
  ));
