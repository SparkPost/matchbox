import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Table, Panel, Box, Popover } from '@sparkpost/matchbox';

const Node = ({ children = 'A react component' }) => <Box minWidth="900">{children}</Box>;
const NodeLong = ({
  children = 'A really longgggggggggggggggggggggggggggggggggggggggg react component',
}) => <Box minWidth="900">{children}</Box>;
const PopoverNode = () => (
  <Popover sectioned trigger={<button>Click</button>}>
    Content
  </Popover>
);
const data = [
  ['Foo', 'Bar', 'Baz', 'Foo'],
  [<Node />, <Node />, <NodeLong />, <Node />], // eslint-disable-line
  [1, 2, 3, 4],
  [<PopoverNode />, 'test', 'test', 'test'], // eslint-disable-line
];

describe('Table', () => {
  add('all table components', () => (
    <Panel>
      <Table title="My Table">
        <thead>
          <Table.Row header>
            <Table.HeaderCell>
              <Table.SortButton direction="asc">Heading 1</Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <Table.SortButton direction="desc">Heading 2</Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Table.SortButton direction={null}>
                Heading 3 with long title long title long title long title
              </Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>Heading 4</Table.HeaderCell>
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell align="right">2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
          <Table.TotalsRow>
            <Table.Cell colSpan="3">Total</Table.Cell>
            <Table.Cell>100000</Table.Cell>
          </Table.TotalsRow>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>4</Table.Cell>
          </Table.Row>
          <Table.TotalsRow>
            <Table.Cell colSpan="3">Total</Table.Cell>
            <Table.Cell>100000</Table.Cell>
          </Table.TotalsRow>
        </tbody>
      </Table>
    </Panel>
  ));

  add('with supplied data', () => (
    <Panel>
      <Table data={data} />
    </Panel>
  ));

  add('frozen first column', () => (
    <>
      <Box maxWidth="1100">
        <Panel>
          <Table p="200" data={data} freezeFirstColumn />
        </Panel>
      </Box>
      <Box height="800"></Box>
      <Box>
        <Panel>
          <Table title="My Table" freezeFirstColumn>
            <thead>
              <Table.Row header>
                <Table.HeaderCell>
                  <Table.SortButton direction="asc">Heading 1</Table.SortButton>
                </Table.HeaderCell>
                <Table.HeaderCell align="right">
                  <Table.SortButton direction="desc">Heading 2</Table.SortButton>
                </Table.HeaderCell>
                <Table.HeaderCell width="300px">
                  <Table.SortButton direction={null}>Heading 3</Table.SortButton>
                </Table.HeaderCell>
                <Table.HeaderCell>Heading 4</Table.HeaderCell>
                <Table.HeaderCell>Heading 5</Table.HeaderCell>
              </Table.Row>
            </thead>
            <tbody>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell align="right">2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>am i visible</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
              <Table.TotalsRow>
                <Table.Cell>Total</Table.Cell>
                <Table.Cell colSpan="4" align="right">
                  100000
                </Table.Cell>
              </Table.TotalsRow>
              <Table.Row>
                <Table.Cell>
                  <PopoverNode />
                </Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <PopoverNode />
                </Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>5</Table.Cell>
              </Table.Row>
            </tbody>
          </Table>
        </Panel>
      </Box>
    </>
  ));

  add('system props', () => (
    <Panel>
      <Table>
        <thead>
          <Table.Row header>
            <Table.HeaderCell width="20%">Padding 300</Table.HeaderCell>
            <Table.HeaderCell>Padding 300</Table.HeaderCell>
            <Table.HeaderCell>Padding 300</Table.HeaderCell>
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row>
            <Table.Cell p="600">Padding 600</Table.Cell>
            <Table.Cell colSpan="2">Padding 800 colspan 2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell p="200">Padding 200</Table.Cell>
            <Table.Cell>Default Padding</Table.Cell>
            <Table.Cell>Default Padding</Table.Cell>
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

  add('with overflowing elements', () => (
    <Panel>
      <Table p="200" data={data} />
    </Panel>
  ));

  add('vertical alignment', () => (
    <Panel>
      <Table>
        <thead>
          <Table.Row header alignY="bottom">
            <Table.HeaderCell>Lorem ipsum</Table.HeaderCell>
            <Table.HeaderCell>
              Lorem ipsum A really longgggggggggggggggggggggggggggggg
            </Table.HeaderCell>
            <Table.HeaderCell>Lorem ipsum</Table.HeaderCell>
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row alignY="top">
            <Table.Cell>Top Aligned</Table.Cell>
            <Table.Cell>Top Aligned</Table.Cell>
            <Table.Cell>Top Aligned</Table.Cell>
          </Table.Row>
          <Table.Row alignY="center">
            <Table.Cell>Center Aligned</Table.Cell>
            <Table.Cell>Center Aligned</Table.Cell>
            <Table.Cell>Center Aligned</Table.Cell>
          </Table.Row>
          <Table.Row alignY="bottom">
            <Table.Cell>Bottom Aligned</Table.Cell>
            <Table.Cell>Bottom Aligned</Table.Cell>
            <Table.Cell>Bottom Aligned</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>
    </Panel>
  ));
});
