import React from 'react';
import { render } from 'test-utils';
import LabelValue from '../LabelValue';

describe('LabelValue', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <LabelValue className="test-class">
        <LabelValue.Label>Label text</LabelValue.Label>
        <LabelValue.Value>children</LabelValue.Value>
      </LabelValue>,
    ).container;
    expect(wrapper.textContent).toEqual('Label textchildren');
    expect(wrapper.querySelectorAll('div')[0].className).toContain('test-class');
  });

  it('renders horizontal orientation correctly', () => {
    const wrapper = render(
      <LabelValue orientation="horizontal">
        <LabelValue.Label>Label text</LabelValue.Label>
        <LabelValue.Value>children</LabelValue.Value>
      </LabelValue>,
    ).container;
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('display', 'grid');
  });

  it('renders inverted appearance correctly', () => {
    const wrapper = render(
      <LabelValue appearance="inverted">
        <LabelValue.Label>Label text</LabelValue.Label>
        <LabelValue.Value>children</LabelValue.Value>
      </LabelValue>,
    ).container;

    expect(wrapper.querySelectorAll('div')[2]).toHaveStyleRule('color', 'gray.500');
  });
});
