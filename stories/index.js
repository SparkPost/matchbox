import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import { Foo, Panel } from '../src';

const PaddingContainer = ({children}) => <div style={{ padding: '60px 30px', background: '#F2F2F5' }}>{children}</div>;

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

// storiesOf('Foo', module)
//   .add('with no props', () => (
//     <Foo />
//   ));

storiesOf('Panel', module)
  .add('with a title', () => (
    <PaddingContainer>
      <Panel title="Title">This is a panel with a title</Panel>
    </PaddingContainer>
  ))
  .add('highlighted with a title', () => (
    <PaddingContainer>
      <Panel title="Title" highlighted={true}>This is a highlighted panel with a title</Panel>
    </PaddingContainer>
  ))
  .add('without no props', () => (
    <PaddingContainer>
      <Panel>This is a panel without title</Panel>
    </PaddingContainer>
  ));
