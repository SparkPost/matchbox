import React from 'react';
import { mount } from 'enzyme';
import * as helpers from '../children';

describe('getChild', () => {
  it('should get a react child', () => {
    const Child = () => <div>child</div>;
    const Parent = props => {
      return <div>{helpers.getChild('Child', props.children, { extra: 'prop' })}</div>;
    };

    const wrapper = mount(
      <Parent>
        <Child />
        not rendered
      </Parent>,
    );

    expect(wrapper.text()).toEqual('child');
    expect(wrapper.find('Child').prop('extra')).toEqual('prop');
  });
});

describe('excludeChild', () => {
  it('should exclude a react child', () => {
    const Child = () => <div>child</div>;
    Child.displayName = 'Child';
    const Parent = props => {
      return <div>{helpers.excludeChild('Child', props.children)}</div>;
    };

    const wrapper = mount(
      <Parent>
        <Child />
        rendered
      </Parent>,
    );

    expect(wrapper.text()).toEqual('rendered');
  });
});
