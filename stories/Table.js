import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Table, Panel } from '../src';

const Node = () => <div>React Node</div>;
const data = [
  ['A', 'B', 'C'],
  [<Node/>, <Node/>, <Node/>],
  ['la', 'dee', 'da']
];

storiesOf('Table', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
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
  ))

  .addWithInfo('with supplied data', () => (
    <Panel>
      <Table data={data} />
    </Panel>
  ));
