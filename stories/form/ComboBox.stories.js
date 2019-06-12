import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Autorenew, Search } from '@sparkpost/matchbox-icons';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ComboBox, ComboBoxTextField, ComboBoxMenu } from '@sparkpost/matchbox';
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
      inputValue,
      getItemProps,
      highlightedIndex,
      openMenu,
      getRootProps
    } = downshift;

    const rootProps = getRootProps({
      refKey: 'rootRef'
    });

    const items = getItems()
      .filter((item) => !selected.some(({ name }) => name === item.name))
      .map((item, index) => getItemProps({
        content: itemToString(item),
        highlighted: highlightedIndex === index,
        index,
        item
      })
    );

    const inputProps = getInputProps({
      id: 'story',
      label: 'Label',
      selectedItems: selected,
      itemToString,
      removeItem,
      onFocus: openMenu,
      error: error && !isOpen ? 'test' : null,
      placeholder: 'Type to search',
      helpText: 'Help text'
    });

    const menuProps = getMenuProps({
      items,
      isOpen: Boolean(isOpen && items.length),
      refKey: 'menuRef',
      style: { marginTop: '-18px' } // Offsets help text height
    });

    return (
      <ComboBox {...rootProps}>
        <ComboBoxTextField {...inputProps}  />
        <ComboBoxMenu {...menuProps} />
      </ComboBox>
    )
  }

  return (
    <Downshift itemToString={itemToString} stateReducer={stateReducer}>
      {typeaheadfn}
    </Downshift>
  );
}

//
export default storiesOf('Form|ComboBox', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('TextField with Menu', (() => (
    <TypeaheadExample />
  )))

  .add('TextField', withInfo()(() => (
    <ComboBoxTextField
      selectedItems={[
        { name: 'foo' },
        { name: 'bar' }
      ]}
      itemToString={({ name }) => name}
      value='input value'
      label='Filters'
    />
  )))

  .add('Menu', withInfo()(() => (
    <div>
      <ComboBox>
        <ComboBoxMenu isOpen={true} items={[
          { content: 'foo' }, { content: 'bar' }
        ]}/>
      </ComboBox>
      <div style={{ height: '150px' }} />
    </div>
  )));
