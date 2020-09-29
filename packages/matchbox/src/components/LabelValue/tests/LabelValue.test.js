import React from 'react';
import LabelValue from '../LabelValue';
import 'jest-styled-components';

describe('LabelValue', () => {
  it('renders correctly', () => {
    const wrapper = global.mountStyled(
      <LabelValue label="Label text" className="test-class">
        children
      </LabelValue>,
    );
    expect(wrapper.text()).toEqual('Label textchildren');
    expect(
      wrapper
        .find('div')
        .at(0)
        .prop('className'),
    ).toContain('test-class');
  });

  it('renders horizontal orientation correctly', () => {
    const wrapper = global.mountStyled(
      <LabelValue label="Label text" orientation="horizontal">
        children
      </LabelValue>,
    );
    expect(wrapper.find('div').at(1)).toHaveStyleRule('display', 'grid');
  });
});
