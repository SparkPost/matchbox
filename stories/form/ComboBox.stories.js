import React from 'react';

import { ComboBox, ComboBoxTextField, ComboBoxMenu, Box } from '@sparkpost/matchbox';
import Downshift from 'downshift';

// This is an example of a multi select downshift typeahead
// A few things are missing from this example:
// - filtering and sorting by input value
// - limiting results list

function getItems() {
  return [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }, { name: 'lorem' }, { name: 'ipsum' }];
}

function TypeaheadExample(props) {
  const { error, delimiter } = props;
  const [selected, setSelected] = React.useState([]);

  function stateReducer(state, changes) {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickItem:
      case Downshift.stateChangeTypes.keyDownEnter:
        if (changes.selectedItem) {
          addItem(changes.selectedItem);
          return {
            ...changes,
            inputValue: '',
            selectedItem: null,
          };
        } else {
          return changes;
        }
      default:
        return changes;
    }
  }

  function addItem(item) {
    setSelected([...selected, item]);
  }

  function removeItem(item) {
    setSelected(selected.filter(i => i !== item));
  }

  function itemToString(item) {
    if (item) {
      return item.name;
    }
    return '';
  }

  function typeaheadfn(downshift) {
    const {
      getInputProps,
      getMenuProps,
      isOpen,
      getItemProps,
      highlightedIndex,
      openMenu,
      getRootProps,
    } = downshift;

    const items = getItems()
      .filter(item => !selected.some(({ name }) => name === item.name))
      .map((item, index) =>
        getItemProps({
          content: itemToString(item),
          highlighted: highlightedIndex === index,
          index,
          item,
        }),
      );

    const rootProps = getRootProps({
      refKey: 'rootRef',
      isOpen: Boolean(isOpen),
    });

    const inputProps = getInputProps({
      id: 'story',
      label: 'Label',
      selectedItems: selected,
      itemToString,
      removeItem,
      onFocus: openMenu,
      error: error && !isOpen ? 'test' : null,
      placeholder: 'Type to search',
      helpText: 'Help text',
      delimiter,
    });

    const menuProps = getMenuProps({
      items,
      isOpen: Boolean(isOpen),
      refKey: 'menuRef',
    });

    return (
      <ComboBox {...rootProps}>
        <ComboBoxTextField {...inputProps} />
        <ComboBoxMenu {...menuProps} />
      </ComboBox>
    );
  }

  return (
    <Downshift itemToString={itemToString} stateReducer={stateReducer}>
      {typeaheadfn}
    </Downshift>
  );
}

export default {
  title: 'Form|ComboBox',
};

export const TextFieldWithMenu = () => <TypeaheadExample />;

export const TextField = () => (
  <ComboBoxTextField
    id="story-id"
    selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
    itemToString={({ name }) => name}
    defaultValue="input value"
    label="Filters"
  />
);

export const Menu = () => (
  <Box maxWidth="20rem">
    <ComboBoxMenu
      isOpen={true}
      items={[{ content: 'foo' }, { content: 'bar' }, { content: 'baz' }]}
      maxHeight="5rem"
    />
  </Box>
);

export const TextFieldWithError = () => (
  <ComboBoxTextField
    id="story-id"
    selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
    itemToString={({ name }) => name}
    defaultValue="input value"
    label="Filters"
    error="Required"
    required
  />
);

export const TextFieldWhileDisabled = () => (
  <ComboBoxTextField
    id="story-id"
    selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
    itemToString={({ name }) => name}
    defaultValue="input value"
    label="Filters"
    disabled
  />
);

export const WithDelimiter = () => <TypeaheadExample delimiter="or" />;
