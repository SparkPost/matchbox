import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Table from '../Table';

describe('Table', () => {
  let wrapper;

  let subject = props =>
    global.mountStyled(
      <Table {...props}>
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
            <Table.Row rowData={[1, '2', <span>3</span>]} className="test" />
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
    });
  });
});
