import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Checkbox, UnstyledLink } from '../src';

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

  .add('Default', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
     />
  )))

  .add('Without Label', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      labelHidden
     />
  )))

  .add('With JSX in Label', withInfo()(() => (
    <Checkbox
      id='id'
      label={<span>I agree to SparkPost's <UnstyledLink>Terms of Use</UnstyledLink></span>}
     />
  )))

  .add('Disabled', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      disabled
     />
  )))

  .add('Required', withInfo()(() => (
    <Checkbox
      id='id'
      label='I agree to the Terms of Use and Privacy Policy'
      required
     />
  )))

  .add('With help text', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  )))

  .add('Group', withInfo('This component only styles its children with correct spacing.')(() => (
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
  )))

  .add('Group with label', withInfo()(() => (
    <div>
      <Checkbox.Group label="Example">
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
  )));
