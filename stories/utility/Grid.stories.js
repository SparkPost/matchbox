import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Box, Grid } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Utility|Grid',
};

const DemoBlock = ({ height = '18px' }) => {
  return <Box bg="blue.400" height={height} mb="18px" />;
};

export const Responsive = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <Grid extra="blahhhh">
    <Grid.Column xs={12} md={2} lg={6}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xs={12} md={5} lg={3}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xs={12} md={5} lg={3}>
      <DemoBlock />
    </Grid.Column>
  </Grid>
));

export const AutoWidth = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <Grid>
    <Grid.Column>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column>
      <DemoBlock />
    </Grid.Column>
  </Grid>
));

export const Offset = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <Grid>
    <Grid.Column xsOffset={10} xs={2}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xsOffset={8} xs={4}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xsOffset={6} xs={6}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xsOffset={4} xs={8}>
      <DemoBlock />
    </Grid.Column>
    <Grid.Column xsOffset={2} xs={10}>
      <DemoBlock />
    </Grid.Column>
  </Grid>
));

export const HorizontalAlignment = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <div>
    <Grid start="xs" end="lg">
      <Grid.Column xs={5}>
        <DemoBlock />
      </Grid.Column>
    </Grid>

    <Grid center="xs">
      <Grid.Column xs={5}>
        <DemoBlock />
      </Grid.Column>
    </Grid>

    <Grid end="xs" start="lg">
      <Grid.Column xs={5}>
        <DemoBlock />
      </Grid.Column>
    </Grid>
  </div>
));

export const VerticalAlignment = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <div>
    <Grid top="xs">
      <Grid.Column xs={6}>
        <DemoBlock height="70px" />
      </Grid.Column>
      <Grid.Column xs={6}>
        <DemoBlock />
      </Grid.Column>
    </Grid>

    <Grid middle="xs">
      <Grid.Column xs={6}>
        <DemoBlock height="70px" />
      </Grid.Column>
      <Grid.Column xs={6}>
        <DemoBlock />
      </Grid.Column>
    </Grid>

    <Grid bottom="xs">
      <Grid.Column xs={6}>
        <DemoBlock height="70px" />
      </Grid.Column>
      <Grid.Column xs={6}>
        <DemoBlock />
      </Grid.Column>
    </Grid>
  </div>
));

export const Distribution = withInfo({ propTablesExclude: [DemoBlock] })(() => (
  <div>
    <Grid around="xs">
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
    </Grid>

    <Grid between="xs">
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
      <Grid.Column xs={2}>
        <DemoBlock />
      </Grid.Column>
    </Grid>
  </div>
));
