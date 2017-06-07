import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import { Table, Panel } from '../src';

const data = [
  ['A', 'B', 'C'],
  [1, 2, 3],
  ['la', 'dee', 'da']
];

storiesOf('Table', module)
  .add('Default', () => (
    <StoryContainer>
      <Panel>
        <Table>
          <Table.Row>
            <Table.HeaderCell>Foo</Table.HeaderCell>
            <Table.HeaderCell>Bar</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Foo</Table.Cell>
            <Table.Cell>Bar</Table.Cell>
          </Table.Row>
        </Table>
      </Panel>
    </StoryContainer>
  ))

  .add('with supplied data', () => (
    <StoryContainer>
      <Panel>
        <Table data={data} />
      </Panel>
    </StoryContainer>
  ));
