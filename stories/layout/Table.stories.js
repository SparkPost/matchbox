import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Table, Panel } from '@sparkpost/matchbox';

const Node = () => <div>A react component</div>;
const data = [
  ['A', 'B', 'C'],
  [<Node />, <Node />, <Node />],
  [1, 2, 3],
];

storiesOf('Layout|Table', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
  .add(
    'table components',
    withInfo({ propTablesExclude: [Panel] })(() => (
      <Panel>
        <Table>
          <tbody>
            <Table.Row>
              <Table.HeaderCell>Heading 1</Table.HeaderCell>
              <Table.HeaderCell>Heading 2</Table.HeaderCell>
              <Table.HeaderCell>Heading 3</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </Panel>
    )),
  )

  .add(
    'with supplied data',
    withInfo()(() => (
      <Panel>
        <Table data={data} />
      </Panel>
    )),
  )

  .add(
    'system props',
    withInfo()(() => (
      <Panel>
        <Table>
          <tbody>
            <Table.Row>
              <Table.HeaderCell p="300">Padding 300</Table.HeaderCell>
              <Table.HeaderCell>Padding 300</Table.HeaderCell>
              <Table.HeaderCell>Padding 300</Table.HeaderCell>
            </Table.Row>
            <Table.Row p="800">
              <Table.Cell p="800">Padding 800</Table.Cell>
              <Table.Cell>Padding 800</Table.Cell>
              <Table.Cell>Padding 800</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell p="400">Padding 400</Table.Cell>
              <Table.Cell>Padding 400</Table.Cell>
              <Table.Cell>Padding 400</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Default Padding</Table.Cell>
              <Table.Cell>Default Padding</Table.Cell>
              <Table.Cell>Default Padding</Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </Panel>
    )),
  );
