import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { Grid } from '@sparkpost/matchbox';

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

storiesOf('Utility|Grid', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Responsive', withInfo({ propTablesExclude: [DemoBlock] })(() => (
    <Grid>
      <Grid.Column xs={12} md={2} lg={6}><DemoBlock /></Grid.Column>
      <Grid.Column xs={12} md={5} lg={3}><DemoBlock /></Grid.Column>
      <Grid.Column xs={12} md={5} lg={3}><DemoBlock /></Grid.Column>
    </Grid>
  )))

  .add('Auto Width', withInfo({ propTablesExclude: [DemoBlock] })(() => (
    <Grid>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
      <Grid.Column><DemoBlock /></Grid.Column>
    </Grid>
  )))

  .add('Offset', withInfo({ propTablesExclude: [DemoBlock] })(() => (
    <Grid>
      <Grid.Column xsOffset={10} xs={2}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={8} xs={4}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={6} xs={6}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={4} xs={8}><DemoBlock /></Grid.Column>
      <Grid.Column xsOffset={2} xs={10}><DemoBlock /></Grid.Column>
    </Grid>
  )))

  .add('Horizontal Alignment', withInfo({ propTablesExclude: [DemoBlock] })(() => (
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
  )))

  .add('Vertical Alignment', withInfo({ propTablesExclude: [DemoBlock] })(() => (
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
  )))

  .add('Distribution', withInfo({ propTablesExclude: [DemoBlock] })(() => (
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
  )));
