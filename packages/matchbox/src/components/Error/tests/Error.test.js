import React from 'react';
import Error from '../Error';
import { shallow } from 'enzyme';

describe('Error', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      error: 'Something terrible happened!'
    };

    wrapper = shallow(<Error {...props}/>);
  });

  it('renders error message', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
