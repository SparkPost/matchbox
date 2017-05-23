import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import backgrounds from "react-storybook-addon-backgrounds";

import Welcome from './Welcome';
import { Panel } from '../src';

const StoryContainer = ({children}) => <div style={{ padding: '60px 30px' }}>{children}</div>;
const bgs = [
  { name: "light", value: "#f2f2f5", default: true },
  { name: "white", value: "#ffffff" },
  { name: "dark", value: "#414146" },
];

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <StoryContainer><Welcome showApp={linkTo('Panel')}/></StoryContainer>
  ));

storiesOf('Panel', module).addDecorator(backgrounds(bgs))
  .add('with a title', () => (
    <StoryContainer>
      <Panel title="Title" sectioned>This is a panel with a title</Panel>
    </StoryContainer>
  ))
  .add('highlighted with a title', () => (
    <StoryContainer>
      <Panel title="Title" accent sectioned>This is a highlighted panel with a title</Panel>
    </StoryContainer>
  ))
  .add('with multiple sections', () => (
    <StoryContainer>
      <Panel>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
      </Panel>
    </StoryContainer>
  ));
