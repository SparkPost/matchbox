import React from 'react';
import LabelValue from '../LabelValue';

describe('LabelValue', () => {
  it('renders correctly', () => {
    const wrapper = global.mountStyled(
      <LabelValue className="test-class">
        <LabelValue.Label>Label text</LabelValue.Label>
        <LabelValue.Value>children</LabelValue.Value>
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
      <LabelValue orientation="horizontal">
        <LabelValue.Label>Label text</LabelValue.Label>
        <LabelValue.Value>children</LabelValue.Value>
      </LabelValue>,
    );
    expect(wrapper.find('div').at(1)).toHaveStyleRule('display', 'grid');
  });
});
