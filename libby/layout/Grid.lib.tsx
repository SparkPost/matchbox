import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Grid, Box } from '@sparkpost/matchbox';

const DemoBlock = () => <Box p="200" bg="blue.400" mb="400" />;

describe('Grid', () => {
  add('Responsive', () => (
    <Grid>
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

  add('Auto width', () => (
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

  add('Offset', () => (
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

  add('Horizontal alignment', () => (
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
});
