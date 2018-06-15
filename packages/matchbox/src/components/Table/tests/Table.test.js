import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';

describe('Table', () => {
  let wrapper;

  it('renders data', () => {
    const props = {
      data: [['A', 'B', 'C'], [1, 2, 3]]
    };

    wrapper = shallow(<Table {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children', () => {
    wrapper = shallow(<Table>children test</Table>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Cell', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.Cell>children test</Table.Cell>);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders value', () => {
      wrapper = shallow(<Table.Cell value='foo' className='test'></Table.Cell>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('HeaderCell', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.HeaderCell>children test</Table.HeaderCell>);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders value', () => {
      wrapper = shallow(<Table.HeaderCell value='foo' className='test'></Table.HeaderCell>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Row', () => {
    it('renders children', () => {
      wrapper = shallow(<Table.Row>children test</Table.Row>);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders row data', () => {
      wrapper = shallow(<Table.Row rowData={[1, '2', <span>3</span>]} className='test' />);
      expect(wrapper).toMatchSnapshot();
    });
  });

});
