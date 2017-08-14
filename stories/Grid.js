import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Grid } from '../src';

const DemoBlock = ({size = '18px'}) => {
  return (
    <div style={{
      backgroundColor: '#fa6423',
      height: size,
      borderRadius: '2px',
      marginBottom: '18px'
    }} />
  );
}

storiesOf('Grid', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Responsive',
  () => (
    <Grid>
      <Grid.Column xs={12} md={2} lg={6}><DemoBlock /></Grid.Column>
      <Grid.Column xs={12} md={5} lg={3}><DemoBlock /></Grid.Column>
      <Grid.Column xs={12} md={5} lg={3}><DemoBlock /></Grid.Column>
    </Grid>
  ))

  .addWithInfo('Auto Width',
  () => (
    <Grid>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
    </Grid>
  ))

  .addWithInfo('Offset',
  () => (
    <Grid>
      <Grid.Column xsOffset={10} xs={2}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={8} xs={4}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={6} xs={6}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={4} xs={8}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={2} xs={10}><DemoBlock /></Grid.Column>
    </Grid>
  ))

  .addWithInfo('Horizontal Alignment',
  () => (
    <div>
      <Grid start='xs' end='lg'>
        <Grid.Column xs={5}><DemoBlock /></Grid.Column>
      </Grid>

      <Grid center='xs'>
        <Grid.Column xs={5}><DemoBlock /></Grid.Column>
      </Grid>

      <Grid end='xs' start='lg'>
        <Grid.Column xs={5}><DemoBlock /></Grid.Column>
      </Grid>
    </div>
  ))

  .addWithInfo('Vertical Alignment',
  () => (
    <div>
      <Grid top='xs'>
        <Grid.Column xs={6}><DemoBlock size='70px'/></Grid.Column>
        <Grid.Column xs={6}><DemoBlock /></Grid.Column>
      </Grid>

      <Grid middle='xs'>
        <Grid.Column xs={6}><DemoBlock size='70px'/></Grid.Column>
        <Grid.Column xs={6}><DemoBlock /></Grid.Column>
      </Grid>

      <Grid bottom='xs'>
        <Grid.Column xs={6}><DemoBlock size='70px'/></Grid.Column>
        <Grid.Column xs={6}><DemoBlock /></Grid.Column>
      </Grid>
    </div>
  ))

  .addWithInfo('Distribution',
  () => (
    <div>
      <Grid around='xs'>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
      </Grid>

      <Grid between='xs'>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
        <Grid.Column xs={2}><DemoBlock /></Grid.Column>
      </Grid>
    </div>
  ));
