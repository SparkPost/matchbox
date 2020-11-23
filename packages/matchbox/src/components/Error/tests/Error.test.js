import React from 'react';
import Error from '../Error';

describe('Error', () => {
  it('renders error message', () => {
    const wrapper = global.mountStyled(
      <Error error="Something terrible happened!" className="test-class" />,
    );
    expect(wrapper.text()).toEqual('Something terrible happened!');
    expect(wrapper.find('svg')).toHaveAttributeValue('aria-label', 'Error');
    expect(
      wrapper
        .find('Box')
        .first()
        .prop('className'),
    ).toContain('test-class');
  });
});
