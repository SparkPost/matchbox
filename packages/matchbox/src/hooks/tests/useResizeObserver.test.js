import React from 'react';
import { shallow } from 'enzyme';
import useResizeObserver from '../useResizeObserver';

describe('useResizeObserver', () => {
  const Component = () => {
    const [ref, entry] = useResizeObserver();
    return <div ref={ref}>{JSON.stringify(entry)}</div>;
  };

  it('mounts correctly', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.text()).toBe('{}');
  });
});
