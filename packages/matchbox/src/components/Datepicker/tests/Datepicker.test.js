import React from 'react';
import Datepicker from '../Datepicker';
import { shallow } from 'enzyme';
import moment from 'moment';

describe('Datepicker', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      selectedDays: {
        from: '2018-06-13T14:28:58.549Z',
        to: '2018-06-14T14:28:58.549Z'

      },
      initialMonth: moment('2018-06-13T14:28:58.549Z').toDate()
    };

    wrapper = shallow(<Datepicker {...props} />);
  });

  it('renders correctly with default props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('passes through all props', () => {
    wrapper.setProps({ foo: 'bar', foo2: 'bar2' });
    expect(wrapper).toMatchSnapshot();
  });




});
