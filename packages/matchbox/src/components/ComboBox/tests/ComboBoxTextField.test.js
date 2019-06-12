import React from 'react';
import ComboBoxTextField from '../ComboBoxTextField';
import { shallow } from 'enzyme';

describe('ComboBoxTextField', () => {
  let focus;

  beforeEach(() => {
    focus = jest.fn();
    React.useRef = jest.fn(() => ({
      current: {
        focus: focus
      }
    }));
  });

  const items = [
    { content: 'foo' },
    { content: 'bar' }
  ];
  const itemToString = ({ content }) => content;
  const subject = (props = {}) => shallow(
    <ComboBoxTextField
      selectedItems={items}
      itemToString={itemToString}
      {...props}
    />
  );

  it('should render the full fieldset with label, id, error and help text', () => {
    const textfield = subject({
      label: 'test label',
      id: 'test-id',
      helpText: 'help',
      error: 'error'
    });

    expect(textfield).toMatchSnapshot();
  });

  it('should render an error in label', () => {
    const textfield = subject({ error: 'test error', label: 'test label', errorInLabel: true });
    expect(textfield.find('Error').prop('className')).toMatch('InlineError');
  });

  it('should render a hidden label', () => {
    const textfield = subject({ label: 'test label', labelHidden: true });
    expect(textfield.find('Label')).not.toExist();
  });

  it('should focus on input when clicking wrapper', () => {
    const textfield = subject({ });
    textfield.find('.Wrapper').simulate('click');
    expect(focus).toHaveBeenCalled();
  });

  describe('selected items', () => {
    it('should render selected items correctly', () => {
      const textfield = subject();
      expect(textfield.find('Tag')).toMatchSnapshot();
    });

    it('should handle remove on a tag correctly', () => {
      const removeItem = jest.fn();
      const textfield = subject({ removeItem });

      textfield.find('Tag').at(0).simulate('remove');
      expect(removeItem).toHaveBeenCalledWith({ content: 'foo' });
    });

    it('should not be removable when disabled', () => {
      const removeItem = jest.fn();
      const textfield = subject({ removeItem, disabled: true });

      textfield.find('Tag').at(0).simulate('remove');
      expect(removeItem).not.toHaveBeenCalled();
    });

    it('should handle remove on a backspace correctly', () => {
      const removeItem = jest.fn();
      const onKeyDown = jest.fn();
      const textfield = subject({ removeItem, value: '', onKeyDown });

      textfield.find('input').simulate('keyDown', { key: 'Backspace', shiftKey: false });
      expect(removeItem).toHaveBeenCalledWith({ content: 'bar' });
      expect(onKeyDown).toHaveBeenCalledWith({ key: 'Backspace', shiftKey: false });
    });

    it('should not remove on a backspace with a value', () => {
      const removeItem = jest.fn();
      const textfield = subject({ removeItem, value: 'test' });

      textfield.find('input').simulate('keyDown', { key: 'Backspace', shiftKey: false });
      expect(removeItem).not.toHaveBeenCalled();
    });
  });
});
