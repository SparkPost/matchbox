import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Table, Panel } from '@sparkpost/matchbox';

export default {
  title: 'Layout|Table',
};

const Node = () => <div>A react component</div>;
const data = [
  ['A', 'B', 'C'],
  [<Node />, <Node />, <Node />],
  [1, 2, 3],
];

export const TableComponents = withInfo({ propTablesExclude: [Panel] })(() => (
  <Panel>
    <Table p={500}>
      <thead>
        <Table.Row header>
          <Table.HeaderCell>Heading 1</Table.HeaderCell>
          <Table.HeaderCell>Heading 2</Table.HeaderCell>
          <Table.HeaderCell>Heading 3</Table.HeaderCell>
        </Table.Row>
      </thead>
      <tbody>
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
));

export const WithSuppliedData = withInfo()(() => (
  <Panel>
    <Table data={data} />
  </Panel>
));

export const SystemProps = withInfo()(() => (
  <Panel>
    <Table>
      <thead>
        <Table.Row header>
          <Table.HeaderCell p="300">Padding 300</Table.HeaderCell>
          <Table.HeaderCell>Padding 300</Table.HeaderCell>
          <Table.HeaderCell>Padding 300</Table.HeaderCell>
        </Table.Row>
      </thead>
      <tbody>
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
));
