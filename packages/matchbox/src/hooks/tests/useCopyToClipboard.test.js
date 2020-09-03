import React from 'react';
import { shallow } from 'enzyme';
import useCopyToClipboard from '../useCopyToClipboard';
import copy from 'copy-to-clipboard';

jest.mock('copy-to-clipboard');

describe('useCopyToClipboard', () => {
  const Component = () => {
    const { copy, copied } = useCopyToClipboard();
    return (
      <button onClick={() => copy('copied text')}>{copied ? 'Copied!' : 'Click to Copy'}</button>
    );
  };

  it('handles copying correctly', () => {
    copy.default = jest.fn();
    const wrapper = shallow(<Component />);

    expect(wrapper.find('button').text()).toEqual('Click to Copy');
    wrapper.find('button').simulate('click');
    expect(copy).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').text()).toEqual('Copied!');
  });
});
