import React from 'react';
import Label from '../Label';
import { ScreenReaderOnly } from '../../ScreenReaderOnly';
import 'jest-styled-components';

describe('Label', () => {
  it('renders correctly', () => {
    const wrapper = global.mountStyled(
      <Label id="label1" label="Label text" className="test-class">
        <span>Select one!</span>
      </Label>,
    );
    expect(wrapper).toHaveAttributeValue('id', 'label1Label');
    expect(wrapper).toHaveAttributeValue('for', 'label1');
    expect(wrapper.text()).toEqual('Label textSelect one!');
    expect(wrapper.find('label').prop('className')).toContain('test-class');
  });

  it('renders hidden correctly', () => {
    const wrapper = global.mountStyled(<Label id="label1" label="Label text" labelHidden></Label>);
    // TODO switch to a style assertion when screen reader component switches to styled-components
    expect(wrapper.find(ScreenReaderOnly)).toExist();
    expect(wrapper.find('label')).toHaveAttributeValue('id', 'label1Label');
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'label1');
  });

  it('renders null when no "label" prop is provided', () => {
    const wrapper = global.mountStyled(<Label />);

    expect(wrapper).toBeNull();
  });
});
