import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Autorenew, Search } from '@sparkpost/matchbox-icons';
import StoryContainer from '../storyHelpers/StoryContainer';
import { MultiSelectTextField, TypeaheadMenu } from '@sparkpost/matchbox';
import Downshift from 'downshift'

// This is an example of a multi select downshift typeahead
// A few things are missing from this example:
// - filtering and sorting by input value
// - limiting results list

function getItems() {
  return [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' },
    { name: 'lorem' },
    { name: 'ipsum' }
  ]
}

function TypeaheadExample(props) {
  const { children, error } = props;
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
            selectedItem: null
          }
        } else {
          return changes
        }
      default:
        return changes
    }
  }

  function addItem(item) {
    setSelected([ ...selected, item ]);
  }

  function removeItem(item) {
    setSelected(selected.filter((i) => i !== item));
  }

  function typeaheadfn(downshift) {
    const {
      getInputProps,
      getMenuProps,
      isOpen,
      inputValue,
      getItemProps,
      highlightedIndex,
      openMenu
    } = downshift;

    const items = getItems()
      .filter((item) => !selected.some(({ name }) => name === item.name))
      .map((item, index) => getItemProps({
        content: item.name,
        highlighted: highlightedIndex === index,
        index,
        item
      })
    );

    const inputProps = getInputProps({
      id: 'story',
      label: 'Label',
      selectedItems: selected,
      itemToString: ({ name }) => name,
      removeItem,
      onFocus: openMenu,
      error: error && !isOpen ? 'test' : null
    });

    const menuProps = getMenuProps({
      items,
      isOpen: Boolean(isOpen && items.length),
      refKey: 'menuRef',
    });

    return (
      <div style={{ position: 'relative' }}>
        <MultiSelectTextField {...inputProps}  />
        <TypeaheadMenu {...menuProps} />
      </div>
    )
  }

  return (
    <Downshift itemToString={(item) => item ? item.name : ''} stateReducer={stateReducer}>
      {typeaheadfn}
    </Downshift>
  );
}

//
export default storiesOf('Form|MultiSelect', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .add('Basic', (() => (
    <TypeaheadExample />
  )));
