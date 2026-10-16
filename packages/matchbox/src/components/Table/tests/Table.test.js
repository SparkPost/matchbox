import React from 'react';
import { render } from 'test-utils';
import Table from '../Table';

/**
 * Renders a cell inside the table markup it needs to be valid DOM.
 * @param {React.ReactElement} cell
 * @returns {HTMLTableRowElement}
 * @private
 */
function renderCell(cell) {
  return render(
    <table>
      <tbody>
        <tr>{cell}</tr>
      </tbody>
    </table>,
  ).container.querySelector('tr');
}

/**
 * Renders a row inside the table markup it needs to be valid DOM.
 * @param {React.ReactElement} row
 * @returns {HTMLTableSectionElement}
 * @private
 */
function renderRow(row) {
  return render(
    <table>
      <tbody>{row}</tbody>
    </table>,
  ).container.querySelector('tbody');
}

describe('Table', () => {
  let wrapper;

  let subject = (props) =>
    render(
      <Table {...props} title="My Data Table">
        <tbody>
          <Table.Row>
            <Table.Cell>one</Table.Cell>
            <Table.Cell>two</Table.Cell>
            <Table.Cell>three</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>,
    ).container;

  it('renders data', () => {
    const props = {
      data: [
        ['A', 'B', 'C'],
        [1, 2, 3],
      ],
    };

    wrapper = subject(props);
    expect(wrapper.querySelectorAll('td')[0].textContent).toEqual('A');
    expect(wrapper.querySelectorAll('td')[1].textContent).toEqual('B');
    expect(wrapper.querySelectorAll('td')[2].textContent).toEqual('C');
    expect(wrapper.querySelectorAll('td')[3].textContent).toEqual('1');
    expect(wrapper.querySelectorAll('td')[4].textContent).toEqual('2');
    expect(wrapper.querySelectorAll('td')[5].textContent).toEqual('3');
  });

  it('renders children', () => {
    wrapper = subject({});
    expect(wrapper.querySelectorAll('td')[0].textContent).toEqual('one');
    expect(wrapper.querySelectorAll('td')[1].textContent).toEqual('two');
    expect(wrapper.querySelectorAll('td')[2].textContent).toEqual('three');
  });

  it('should render a caption', () => {
    wrapper = subject();
    expect(wrapper.querySelector('caption').textContent).toEqual('My Data Table');
  });

  it('should distribute system props correctly', () => {
    wrapper = subject({ p: '100', m: '100' });
    expect(wrapper.querySelectorAll('div')[0]).toHaveStyleRule('margin', '100');
    expect(wrapper.querySelectorAll('div')[1]).not.toHaveStyleRule('padding', '100');
    expect(wrapper.querySelector('table')).not.toHaveStyleRule('margin', '100');
  });

  describe('Cell', () => {
    it('renders children', () => {
      wrapper = renderCell(<Table.Cell>children test</Table.Cell>);
      expect(wrapper.textContent.includes('children test')).toBe(true);
    });

    it('renders value', () => {
      wrapper = renderCell(<Table.Cell value="foo" className="test"></Table.Cell>);
      expect(wrapper.textContent.includes('foo')).toBe(true);
    });
  });

  describe('HeaderCell', () => {
    it('renders children', () => {
      wrapper = renderCell(<Table.HeaderCell>children test</Table.HeaderCell>);
      expect(wrapper.textContent).toEqual('children test');
    });

    it('renders value', () => {
      wrapper = renderCell(<Table.HeaderCell value="foo" className="test"></Table.HeaderCell>);
      expect(wrapper.textContent).toEqual('foo');
    });
  });

  describe('Row', () => {
    it('renders children', () => {
      wrapper = renderRow(
        <Table.Row>
          <td>children test</td>
        </Table.Row>,
      );
      expect(wrapper.textContent).toEqual('children test');
    });

    it('renders row data', () => {
      wrapper = render(
        <Table>
          <tbody>
            <Table.Row rowData={[1, '2', <span key="test">3</span>]} className="test" />
          </tbody>
        </Table>,
      ).container;
      expect(wrapper.querySelectorAll('td')[0].textContent).toEqual('1');
      expect(wrapper.querySelectorAll('td')[1].textContent).toEqual('2');
      expect(wrapper.querySelectorAll('td')[2].querySelectorAll('span')[0].textContent).toEqual(
        '3',
      );
      expect(wrapper.querySelector('.test')).toBeInTheDocument();
    });
  });

  describe('TotalsRow', () => {
    it('renders children', () => {
      wrapper = renderRow(
        <Table.TotalsRow>
          <td>children test</td>
        </Table.TotalsRow>,
      );
      expect(wrapper.textContent).toEqual('children test');
    });

    it('renders totals row data', () => {
      wrapper = render(
        <Table>
          <tbody>
            <Table.TotalsRow rowData={[1, '2', <span key="test">3</span>]} className="test" />
          </tbody>
        </Table>,
      ).container;
      expect(wrapper.querySelectorAll('td')[0].textContent).toEqual('1');
      expect(wrapper.querySelectorAll('td')[1].textContent).toEqual('2');
      expect(wrapper.querySelectorAll('td')[2].querySelectorAll('span')[0].textContent).toEqual(
        '3',
      );
      expect(wrapper.querySelector('.test')).toBeInTheDocument();
    });
  });
});
