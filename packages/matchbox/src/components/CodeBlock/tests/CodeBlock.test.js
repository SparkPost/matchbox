import React from 'react';
import CodeBlock from '../CodeBlock';
import { shallow } from 'enzyme';

describe('CodeBlock', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      code: 'curl -X POST\nhttps://api.sparkpost.com/api/v1/tran…\n'
    };

    wrapper = shallow(<CodeBlock {...props}/>);
  });

  it('renders with default props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders line numbers', () => {
    wrapper.setProps({ numbered: true, height: 200 });
    expect(wrapper.find('.PrefixWrapper')).toMatchSnapshot();
  });

});
