import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Table';

describe('Table', () => {
  let wrapper;

  let subject = props =>
    global.mountStyled(
      <Table {...props} title="My Data Table">
        <tbody>
          <Table.Row>
            <Table.Cell>one</Table.Cell>
            <Table.Cell>two</Table.Cell>
            <Table.Cell>three</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>,
    );

  it('renders data', () => {
    const props = {
      data: [
        ['A', 'B', 'C'],
        [1, 2, 3],
      ],
    };

    wrapper = subject(props);
    expect(
      wrapper
        .find('td')
        .at(0)
        .text(),
    ).toEqual('A');
    expect(
      wrapper
        .find('td')
        .at(1)
        .text(),
    ).toEqual('B');
    expect(
      wrapper
        .find('td')
        .at(2)
        .text(),
    ).toEqual('C');
    expect(
      wrapper
        .find('td')
        .at(3)
        .text(),
    ).toEqual('1');
    expect(
      wrapper
        .find('td')
        .at(4)
        .text(),
    ).toEqual('2');
    expect(
      wrapper
        .find('td')
        .at(5)
        .text(),
    ).toEqual('3');
  });

  it('renders children', () => {
    wrapper = subject({});
    expect(
      wrapper
        .find('td')
        .at(0)
        .text(),
    ).toEqual('one');
    expect(
      wrapper
        .find('td')
        .at(1)
        .text(),
    ).toEqual('two');
    expect(
      wrapper
        .find('td')
        .at(2)
        .text(),
    ).toEqual('three');
  });

  it('should freeze a column', () => {
    wrapper = subject({ freezeFirstColumn: true });
    wrapper.simulate('scroll', { target: { scrollLeft: 11 } });
    expect(wrapper.find('table')).toHaveStyleRule('position', 'sticky', {
      modifier: 'th:first-child',
    });
    expect(wrapper.find('table')).toHaveStyleRule('position', 'sticky', {
      modifier: 'td:first-child',
    });
  });

  it('should render a caption', () => {
    wrapper = subject();
    expect(wrapper.find('caption').text()).toEqual('My Data Table');
  });

  it('should distribute system props correctly', () => {
    wrapper = subject({ p: '100', m: '100' });
    expect(wrapper).toHaveStyleRule('margin', '100');
    expect(wrapper).not.toHaveStyleRule('padding', '100');
    expect(wrapper.find('table')).not.toHaveStyleRule('margin', '100');
  });

  describe('Cell', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.Cell>children test</Table.Cell>);
      expect(wrapper.text().includes('children test')).toBe(true);
    });

    it('renders value', () => {
      wrapper = shallow(<Table.Cell value="foo" className="test"></Table.Cell>);
      expect(wrapper.text().includes('foo')).toBe(true);
    });
  });

  describe('HeaderCell', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.HeaderCell>children test</Table.HeaderCell>);
      expect(wrapper.text()).toEqual('children test');
    });

    it('renders value', () => {
      wrapper = shallow(<Table.HeaderCell value="foo" className="test"></Table.HeaderCell>);
      expect(wrapper.text()).toEqual('foo');
    });
  });

  describe('Row', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.Row>children test</Table.Row>);
      expect(wrapper.text()).toEqual('children test');
    });

    it('renders row data', () => {
      wrapper = global.mountStyled(
        <Table>
          <tbody>
            <Table.Row rowData={[1, '2', <span key="test">3</span>]} className="test" />
          </tbody>
        </Table>,
      );
      expect(
        wrapper
          .find('td')
          .at(0)
          .text(),
      ).toEqual('1');
      expect(
        wrapper
          .find('td')
          .at(1)
          .text(),
      ).toEqual('2');
      expect(
        wrapper
          .find('td')
          .at(2)
          .find('span')
          .at(0)
          .text(),
      ).toEqual('3');
      expect(wrapper.find('.test')).toExist();
    });
  });

  describe('TotalsRow', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.Row>children test</Table.Row>);
      expect(wrapper.text()).toEqual('children test');
    });

    it('renders totals row data', () => {
      wrapper = global.mountStyled(
        <Table>
          <tbody>
            <Table.TotalsRow rowData={[1, '2', <span key="test">3</span>]} className="test" />
          </tbody>
        </Table>,
      );
      expect(
        wrapper
          .find('td')
          .at(0)
          .text(),
      ).toEqual('1');
      expect(
        wrapper
          .find('td')
          .at(1)
          .text(),
      ).toEqual('2');
      expect(
        wrapper
          .find('td')
          .at(2)
          .find('span')
          .at(0)
          .text(),
      ).toEqual('3');
      expect(wrapper.find('.test')).toExist();
    });
  });
});
