import React from 'react';
import ComboBox from '../ComboBox';
import ComboBoxMenu from '../ComboBoxMenu';
import ComboBoxTextField from '../ComboBoxTextField';
import { render } from 'test-utils';

describe('ComboBox Wrapper', () => {
  const subject = (props = {}) =>
    render(
      <ComboBox {...props}>
        <ComboBoxTextField id="test-id" helpText="test help" />
        <ComboBoxMenu isOpen items={[{ content: 'foo', is: 'button' }]} />
      </ComboBox>,
    );

  it('should menu correctly inside textfield', () => {
    const { getByRole, getByText } = subject();
    expect(getByRole('textbox')).toBeTruthy();
    expect(getByRole('menuitem', { name: 'foo' })).toBeTruthy();
    expect(getByText(/test help/g)).toBeTruthy();
  });
});
