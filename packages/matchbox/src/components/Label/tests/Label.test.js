import React from 'react';
import Label from '../Label';
import { shallow } from 'enzyme';

describe('Label', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      id: 'label1',
      label: 'Label text',
      className: 'form-field'
    };

    wrapper = shallow(<Label {...props}><span>Select one!</span></Label>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
