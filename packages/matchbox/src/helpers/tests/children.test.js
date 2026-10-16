import React from 'react';
import { render } from 'test-utils';
import * as helpers from '../children';

describe('getChild', () => {
  it('should get a react child', () => {
    const Child = ({ extra }) => <div data-extra={extra}>child</div>;
    const Parent = (props) => {
      return <div>{helpers.getChild('Child', props.children, { extra: 'prop' })}</div>;
    };

    const wrapper = render(
      <Parent>
        <Child />
        not rendered
      </Parent>,
    ).container;

    expect(wrapper.textContent).toEqual('child');
    expect(wrapper.querySelector('[data-extra]').getAttribute('data-extra')).toEqual('prop');
  });
});

describe('excludeChild', () => {
  it('should exclude a react child', () => {
    const Child = () => <div>child</div>;
    Child.displayName = 'Child';
    const Parent = (props) => {
      return <div>{helpers.excludeChild('Child', props.children)}</div>;
    };

    const wrapper = render(
      <Parent>
        <Child />
        rendered
      </Parent>,
    ).container;

    expect(wrapper.textContent).toEqual('rendered');
  });
});
