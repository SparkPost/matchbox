import React from 'react';
import { render, fireEvent } from 'test-utils';
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
    const wrapper = render(<Component />).container;

    expect(wrapper.querySelector('button').textContent).toEqual('Click to Copy');
    fireEvent.click(wrapper.querySelector('button'));
    expect(copy).toHaveBeenCalledTimes(1);
    expect(wrapper.querySelector('button').textContent).toEqual('Copied!');
  });
});
