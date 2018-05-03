import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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

  .add('Default', withInfo()(() => (
    <Toggle
      id='id'
     />
  )))

  .add('Disabled', withInfo()(() => (
    <Toggle
      id='id'
      disabled
     />
  )));
