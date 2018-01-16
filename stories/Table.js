import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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
  .add('Default',
  withInfo()(() => (
    <Panel>
      <Table>
        <tbody>
          <Table.Row>
            <Table.HeaderCell>Foo</Table.HeaderCell>
            <Table.HeaderCell>Bar</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Foo</Table.Cell>
            <Table.Cell>Bar</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>
    </Panel>
  )))

  .add('with supplied data', withInfo()(() => (
    <Panel>
      <Table data={data} />
    </Panel>
  )));
